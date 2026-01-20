import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { COLLECTIONS, PRODUCTS } from "@/lib/catalog";

export function generateStaticParams() {
  return COLLECTIONS.map(c => ({ slug: c.slug }));
}

export default function CollectionDetail({ params }: { params: { slug: string } }) {
  const col = COLLECTIONS.find(c => c.slug === params.slug);
  const name = col?.name ?? "Collection";
  const filtered = PRODUCTS.filter(p => p.tags.includes(name));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
        <div>
          <h1 style={{ marginBottom: 6 }}>{name}</h1>
          <p className="p" style={{ marginTop: 0, maxWidth: 960 }}>{col?.blurb}</p>
        </div>
        <Link className="btn" href="/collections">All collections</Link>
      </div>

      <ProductGrid products={filtered.length ? filtered : PRODUCTS} />
    </>
  );
}
