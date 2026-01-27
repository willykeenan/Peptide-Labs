"use client";
import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatPriceDisplay } from "@/lib/catalog";
import { useCart } from "@/components/cart/CartContext";
import ProductImage from "@/components/ProductImage";

export default function ProductCard({
  product,
  imageFit = "cover",
  imageHeight = 180,
}: {
  product: Product;
  imageFit?: "cover" | "contain";
  imageHeight?: number;
}) {
  const { add } = useCart();
  return (
    <div className="card">
      <ProductImage
        slug={product.slug}
        alt={product.name}
        src={product.image}
        width={520}
        height={520}
        fit={imageFit}
        style={{ width: "100%", height: imageHeight }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start", marginTop: 14 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 900, fontSize: 16 }}>{product.name}</div>
          <div className="small">{product.subtitle}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 900 }}>{formatPriceDisplay(product)}</div>
        </div>
      </div>

      <div className="small" style={{ marginTop: 10 }}>{product.short}</div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
        {product.tags.slice(0, 4).map(t => <span key={t} className="pill">{t}</span>)}
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <Link className="btn" href={`/product/${product.slug}`}>View</Link>
        {product.coaFile ? (
          <Link className="btn" href={`/coas/${product.slug}`}>COA</Link>
        ) : null}
        {product.inStock ? (
          <button className="btn btnPrimary" onClick={() => add(product.id, 1)}>Add to cart</button>
        ) : (
          <button className="btn" disabled>Out of Stock</button>
        )}
      </div>
    </div>
  );
}
