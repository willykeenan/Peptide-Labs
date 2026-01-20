import Link from "next/link";
import { PRODUCTS } from "@/lib/catalog";

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.slug);

  if (!product) return <div className="card">Not found</div>;

  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0 }}>{product.name}</h1>
          <div className="p" style={{ marginTop: 8 }}>{product.subtitle}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {product.tags.map(t => <span key={t} className="pill">{t}</span>)}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          {product.compareAt ? <div className="small"><s>${product.compareAt.toFixed(2)}</s></div> : null}
          <div style={{ fontWeight: 900, fontSize: 20 }}>${product.price.toFixed(2)}</div>
          <div className="small" style={{ marginTop: 6 }}>{product.inStock ? "In stock" : "Out of stock"}</div>
        </div>
      </div>

      <hr className="hr" />

      <h3 style={{ marginTop: 0 }}>Research Notice</h3>
      <p className="p" style={{ maxWidth: 920 }}>
        This material is supplied strictly for laboratory research and analytical purposes only.
        <b> Not for human or veterinary use.</b> No dosage, administration, or therapeutic guidance is provided.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        <Link className="btn" href={product.coaPath}>View COA</Link>
        <Link className="btn" href="/shop">Back to shop</Link>
      </div>
    </div>
  );
}
