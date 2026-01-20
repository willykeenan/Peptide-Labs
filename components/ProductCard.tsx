"use client";
import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { useCart } from "@/components/cart/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 900, fontSize: 16 }}>{product.name}</div>
          <div className="small">{product.subtitle}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          {product.compareAt ? <div className="small"><s>${product.compareAt.toFixed(2)}</s></div> : null}
          <div style={{ fontWeight: 900 }}>${product.price.toFixed(2)}</div>
        </div>
      </div>

      <div className="small" style={{ marginTop: 10 }}>{product.short}</div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
        {product.tags.slice(0, 4).map(t => <span key={t} className="pill">{t}</span>)}
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <Link className="btn" href={`/product/${product.slug}`}>View</Link>
        <Link className="btn" href={product.coaPath}>COA</Link>
        {product.inStock ? (
          <button className="btn btnPrimary" onClick={() => add(product.id, 1)}>Add to cart</button>
        ) : (
          <span className="small">Out of stock</span>
        )}
      </div>

      <div className="small" style={{ marginTop: 10 }}>
        RUO only • Not for human consumption
      </div>
    </div>
  );
}
