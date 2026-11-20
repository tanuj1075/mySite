// Explicit Vercel function for the delivery estimate endpoint.
// This keeps checkout's nested path available even when a deployment does not
// register the optional catch-all function for this directory.
export { default } from '../_express-app.js';
