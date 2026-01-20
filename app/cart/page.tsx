"use client";
import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { state, getProduct, subtotal, remove, setQty, clear } = useCart();

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
        <div>
          <h1 style={{ marginTop: 0, marginBottom: 6 }}>Cart</h1>
          <div className="small">Demo cart • editable quantities • subtotal updates</div>
        </div>
        {state.lines.length ? <button className="btn" onClick={clear}>Clear</button> : null}
      </div>

      {state.lines.length === 0 ? (
        <p className="p" style={{ marginTop: 14 }}>Your cart is empty. <Link href="/shop"><u>Browse products</u></Link>.</p>
      ) : (
        <>
          <div className="grid" style={{ gap: 10, marginTop: 14 }}>
            {state.lines.map(line => {
              const p = getProduct(line.productId);
              if (!p) return null;
              return (
                <div key={line.productId} className="badge" style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 900 }}>{p.name} <span className="small">• {p.subtitle}</span></div>
                    <div className="small">${p.price.toFixed(2)} each</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      className="input"
                      value={line.qty}
                      onChange={(e) => setQty(line.productId, Number(e.target.value || 1))}
                      type="number"
                      min={1}
                      style={{ width: 90 }}
                    />
                    <button className="btn" onClick={() => remove(line.productId)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>

          <hr className="hr" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 900 }}>Subtotal</div>
            <div style={{ fontWeight: 900 }}>${subtotal.toFixed(2)}</div>
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href="/shop">Continue shopping</Link>
            <Link className="btn btnPrimary" href="/checkout">Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}
