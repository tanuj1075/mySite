import './load-env.mjs';

async function testLifecycle() {
  console.log('--- STARTING VERIFICATION OF ENTIRE ORDER LIFECYCLE ---');
  
  // 1. Customer Login
  const loginRes = await fetch('http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'testuser123@example.com', password: 'VantaUser2026!' })
  });
  if (!loginRes.ok) throw new Error('Customer login failed: ' + (await loginRes.text()));
  const { accessToken: custToken, user } = await loginRes.json() as { accessToken: string; user: { email: string } };
  console.log('✓ 1. Customer authenticated:', user.email);

  // 2. Address Check / Provision
  const addrsRes = await fetch('http://localhost:4000/api/addresses', {
    headers: { 'Authorization': 'Bearer ' + custToken }
  });
  let addrs = await addrsRes.json() as Array<{ id: string; city: string }>;
  if (addrs.length === 0) {
    const newAddrRes = await fetch('http://localhost:4000/api/addresses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + custToken },
      body: JSON.stringify({
        name: 'Test Customer',
        line1: '123 Atelier Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        postalCode: '400001',
        country: 'India',
        phone: '+91 9876543210'
      })
    });
    addrs = [await newAddrRes.json() as { id: string; city: string }];
  }
  const address = addrs[0];
  console.log('✓ 2. Verified Shipping Address in DB:', address.id, address.city);

  // 3. Product Catalog
  const prodsRes = await fetch('http://localhost:4000/api/products');
  const prods = await prodsRes.json() as Array<{
    id: string;
    name: string;
    price: number;
    colors: Array<{ name: string }>;
    sizeInventory: Record<string, Array<{ size: string; stock: number }>>;
  }>;
  const prod = prods[0];
  const color = prod.colors[0].name;
  const size = prod.sizeInventory[color][0].size;
  console.log('✓ 3. Selected Real Product from DB:', prod.id, prod.name, 'Price:', prod.price, 'Color:', color, 'Size:', size);

  // 4. Create Order in Database
  const orderRes = await fetch('http://localhost:4000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + custToken },
    body: JSON.stringify({
      addressId: address.id,
      paymentMethod: 'COD',
      items: [{
        productId: prod.id,
        color,
        size,
        quantity: 1
      }]
    })
  });
  if (!orderRes.ok) throw new Error('Order creation failed: ' + (await orderRes.text()));
  const createdOrder = await orderRes.json() as { id: string; displayId: string; total: number; orderStatus: string };
  console.log('✓ 4. Real Database Order Created! ID:', createdOrder.id, 'DisplayID:', createdOrder.displayId, 'Total:', createdOrder.total, 'Status:', createdOrder.orderStatus);

  // 5. Customer Order History
  const myOrdersRes = await fetch('http://localhost:4000/api/orders', {
    headers: { 'Authorization': 'Bearer ' + custToken }
  });
  const myOrders = await myOrdersRes.json() as Array<{ id: string; displayId: string }>;
  const foundOrder = myOrders.find((o) => o.id === createdOrder.id);
  if (!foundOrder) throw new Error('Created order not found in customer order history!');
  console.log('✓ 5. Order verified in Customer History. Total orders for user:', myOrders.length);

  // 6. Admin Authentication
  const adminLoginRes = await fetch('http://localhost:4000/api/auth/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@vanta.com', password: 'VantaAdmin2026!' })
  });
  if (!adminLoginRes.ok) throw new Error('Admin login failed: ' + (await adminLoginRes.text()));
  const { accessToken: adminToken } = await adminLoginRes.json() as { accessToken: string };
  console.log('✓ 6. Admin authenticated with role ADMIN');

  // 7. Admin Orders Query
  const adminOrdersRes = await fetch('http://localhost:4000/api/admin/orders', {
    headers: { 'Authorization': 'Bearer ' + adminToken }
  });
  const adminOrders = await adminOrdersRes.json() as Array<{ id: string; displayId: string; orderStatus: string }>;
  const adminFound = adminOrders.find((o) => o.id === createdOrder.id);
  if (!adminFound) throw new Error('Created order not visible in Admin Orders list!');
  console.log('✓ 7. Order verified in Admin Portal. Status:', adminFound.orderStatus);

  // 8. Admin Status Update
  const patchRes = await fetch('http://localhost:4000/api/admin/orders/' + createdOrder.id + '/status', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + adminToken },
    body: JSON.stringify({ status: 'CONFIRMED' })
  });
  if (!patchRes.ok) throw new Error('Status update failed: ' + (await patchRes.text()));
  console.log('✓ 8. Admin updated Order status from ORDER_PLACED to CONFIRMED');

  // 9. Customer Reflect Status Change
  const verifyOrderRes = await fetch('http://localhost:4000/api/orders/' + createdOrder.id, {
    headers: { 'Authorization': 'Bearer ' + custToken }
  });
  const updatedCustOrder = await verifyOrderRes.json() as { id: string; orderStatus: string };
  if (updatedCustOrder.orderStatus !== 'CONFIRMED') throw new Error('Status update not reflected on customer order!');
  console.log('✓ 9. Customer retrieved order and verified updated status is CONFIRMED');

  console.log('--- ALL ORDER LIFECYCLE TESTS PASSED 100% ---');
}

testLifecycle().catch((err) => {
  console.error('TEST FAILED:', err);
  process.exit(1);
});
