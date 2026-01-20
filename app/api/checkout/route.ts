import { NextResponse } from "next/server";

/**
 * Payments-ready checkout stub.
 * Replace this route with Stripe Checkout Session creation (or another processor).
 *
 * IMPORTANT:
 * - Validate items/prices server-side (do not trust client totals).
 * - Keep all secret keys in environment variables (.env.local).
 */
export async function POST(req: Request) {
  const body = await req.json();

  // body: { email, lines: [{ productId, qty }] }
  // TODO: validate and create order record

  return NextResponse.json({
    url: "/checkout-success?note=payments_not_configured"
  });
}
