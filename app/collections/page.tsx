import Link from "next/link";
import { matchesCollection } from "@/lib/catalog";
import { COLLECTIONS, PRODUCTS } from "@/lib/catalog.server";

export default function CollectionsPage() {
  return (
    <>
      <h1 style={{ marginBottom: 6 }}>Collections</h1>
      <p className="p" style={{ maxWidth: 960, marginTop: 0 }}>
        Demo grouping to show how customers might browse (e.g., recovery vs dermal vs essentials) without making therapeutic claims.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {COLLECTIONS.map(c => (
          <Link key={c.slug} href={`/collections/${c.slug}`} className="card" style={{ display: "block" }}>
            <div style={{ fontWeight: 900 }}>{c.name}</div>
            <div className="small" style={{ marginTop: 6 }}>{c.blurb}</div>
            <div className="small" style={{ marginTop: 10 }}>
              {PRODUCTS.filter(p => matchesCollection(p, c.name)).length} items
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
