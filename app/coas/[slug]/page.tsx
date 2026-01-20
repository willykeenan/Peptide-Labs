import Link from "next/link";
import { PRODUCTS } from "@/lib/catalog";

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export default function CoaPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.slug);

  if (!product) return <div className="card">COA not found</div>;

  return (
    <div className="card">
      <h1 style={{ marginTop: 0 }}>COA — {product.name}</h1>
      <p className="p" style={{ maxWidth: 920 }}>
        This is a placeholder page for attaching a real Certificate of Analysis (PDF) per lot.
        For the demo, it shows how COA info could be presented.
      </p>

      <div className="badge" style={{ marginTop: 10 }}>
        <div><b>Lot:</b> AL-2026-0001</div>
        <div><b>Method:</b> HPLC / MS (example)</div>
        <div><b>Purity:</b> 99%+ (example)</div>
        <div className="small" style={{ marginTop: 8 }}>
          Demo note: replace this panel with the actual COA PDF viewer + lot selector.
        </div>
      </div>

      <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" href={`/product/${product.slug}`}>Back to product</Link>
        <Link className="btn" href="/shop">Shop</Link>
      </div>
    </div>
  );
}
