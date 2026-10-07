export interface RazorpayPaymentResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: { name?: string; email?: string; contact?: string };
  theme: { color: string };
  handler: (response: RazorpayPaymentResponse) => void | Promise<void>;
  modal: { ondismiss: () => void };
}

export interface RazorpayCheckout {
  open(): void;
}

export interface RazorpayCheckoutConstructor {
  new (options: RazorpayCheckoutOptions): RazorpayCheckout;
}

declare global {
  interface Window {
    Razorpay?: RazorpayCheckoutConstructor;
  }
}

let checkoutScriptPromise: Promise<RazorpayCheckoutConstructor> | null = null;

export function loadRazorpayCheckout(): Promise<RazorpayCheckoutConstructor> {
  if (window.Razorpay) return Promise.resolve(window.Razorpay);
  if (checkoutScriptPromise) return checkoutScriptPromise;

  checkoutScriptPromise = new Promise<RazorpayCheckoutConstructor>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      if (window.Razorpay) resolve(window.Razorpay);
      else {
        checkoutScriptPromise = null;
        reject(new Error('Razorpay Checkout failed to initialize'));
      }
    };
    script.onerror = () => {
      checkoutScriptPromise = null;
      reject(new Error('Could not load Razorpay Checkout. Check your network connection and try again.'));
    };
    document.head.appendChild(script);
  });

  return checkoutScriptPromise;
}
