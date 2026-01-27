import Link from "next/link";
import { formatPriceDisplay } from "@/lib/catalog";
import { PRODUCTS } from "@/lib/catalog.server";
import ProductImage from "@/components/ProductImage";

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.slug);

  if (!product) return <div className="card">Not found</div>;

  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 280px", minWidth: 240 }}>
          <ProductImage
            slug={product.slug}
            alt={product.name}
            src={product.image}
            width={720}
            height={720}
            style={{ width: "100%", height: 320 }}
          />
        </div>
        <div style={{ flex: "2 1 320px", minWidth: 260 }}>
          <h1 style={{ margin: 0 }}>{product.name}</h1>
          <div className="p" style={{ marginTop: 8 }}>{product.subtitle}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {product.tags.map(t => <span key={t} className="pill">{t}</span>)}
          </div>
        </div>
        <div style={{ textAlign: "right", minWidth: 160 }}>
          <div style={{ fontWeight: 900, fontSize: 20 }}>{formatPriceDisplay(product)}</div>
          <div className="small" style={{ marginTop: 6 }}>{product.inStock ? "In stock" : "Out of stock"}</div>
        </div>
      </div>

      <hr className="hr" />

      <div className="badge" style={{ maxWidth: 520 }}>
        <div style={{ fontWeight: 900, marginBottom: 8 }}>Product Details</div>
        <div className="small"><b>SKU:</b> {product.sku}</div>
        <div className="small"><b>Category:</b> {product.category}</div>
        <div className="small"><b>Stock:</b> {product.inStock ? "In stock" : "Out of stock"}</div>
        <div className="small"><b>Price:</b> {formatPriceDisplay(product)}</div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        {product.coaFile ? (
          <Link className="btn" href={`/coas/${product.coaFile}`}>View COA</Link>
        ) : null}
        <Link className="btn" href="/shop">Back to shop</Link>
      </div>
    </div>
  );
}
