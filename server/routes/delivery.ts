import { Router } from 'express';
import { z } from 'zod';
import { estimateDelivery } from '../lib/delivery.js';

const router = Router();

const addressInput = z.object({
  city: z.string().min(1, 'City is required'),
  state: z.string().optional(),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().default('India'),
});

router.post('/estimate', (req, res) => {
  try {
    const parsed = addressInput.parse(req.body);
    const address: import('../lib/delivery.js').DeliveryEstimateInput = {
      city: parsed.city,
      state: parsed.state,
      postalCode: parsed.postalCode,
      country: parsed.country,
    };
    const estimate = estimateDelivery(address);
    res.json(estimate);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0]?.message ?? 'Invalid address' });
    }
    const message = error instanceof Error ? error.message : 'Could not estimate delivery';
    res.status(400).json({ error: message });
  }
});

export default router;
