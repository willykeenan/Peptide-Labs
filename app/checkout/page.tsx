"use client";
import { useMemo, useState } from "react";
import { useCart } from "@/components/cart/CartContext";

export default function CheckoutPage() {
  const { state, subtotal } = useCart();
  const [ack, setAck] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const disabled = useMemo(() => !ack || !email || state.lines.length === 0 || loading, [ack, email, state.lines.length, loading]);

  const startCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, lines: state.lines }),
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    setLoading(false);
  };

  return (
    <div className="card">
      <h1 style={{ marginTop: 0, marginBottom: 6 }}>Checkout</h1>
      <p className="p" style={{ maxWidth: 920, marginTop: 0 }}>
        Demo checkout flow. To proceed, acknowledge that products are supplied strictly for laboratory research and analytical purposes only.
        <b> Not for human consumption.</b>
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 12 }}>
        <div className="badge">
          <div style={{ fontWeight: 900, marginBottom: 8 }}>Contact</div>
          <label className="small">Email</label>
          <input className="input" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="small" style={{ marginTop: 8 }}>Demo only — no emails are sent.</div>
        </div>

        <div className="badge">
          <div style={{ fontWeight: 900, marginBottom: 8 }}>Order summary</div>
          <div className="small">Items: {state.lines.reduce((n, l) => n + l.qty, 0)}</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontWeight: 900 }}>
            <span>Total</span><span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="small" style={{ marginTop: 8 }}>Tax/shipping placeholders — add later.</div>
        </div>
      </div>

      <div className="badge" style={{ marginTop: 12 }}>
        <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <input type="checkbox" checked={ack} onChange={(e) => setAck(e.target.checked)} style={{ marginTop: 3 }} />
          <span className="small">
            I certify I am purchasing materials strictly for laboratory research/analytical purposes only and not for human or veterinary use.
          </span>
        </label>
      </div>

      <div style={{ marginTop: 14 }}>
        <button className={`btn ${disabled ? "" : "btnPrimary"}`} disabled={disabled} onClick={startCheckout}>
          {loading ? "Redirecting…" : "Pay & complete order"}
        </button>
      </div>

      <div className="small" style={{ marginTop: 10 }}>
        Payments hook: <span className="kbd">app/api/checkout/route.ts</span> (swap in Stripe Checkout Session / processor when ready).
      </div>
    </div>
  );
}
