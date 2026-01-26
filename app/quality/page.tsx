import Link from "next/link";
import { COA_MAP, PRODUCTS } from "@/lib/catalog.server";

const getCoaEntries = () => {
  return Object.entries(COA_MAP)
    .map(([slug, meta]) => {
      const product = PRODUCTS.find(p => p.slug === slug);
      if (!product) return null;
      return { slug, product, meta };
    })
    .filter(Boolean)
    .sort((a, b) => a!.product.name.localeCompare(b!.product.name));
};

export default function QualityPage() {
  const coas = getCoaEntries();

  return (
    <div className="card">
      <h1 style={{ marginTop: 0, marginBottom: 6 }}>Certificate of Analysis</h1>

      <h2 className="h2" style={{ marginTop: 0 }}>Certificates of Analysis (COAs)</h2>

      <div className="coa-tabs">
        <button className="coa-tab is-active" type="button">Lab Purity Results</button>
      </div>

      <div className="coa-grid">
        {coas.length === 0 ? (
          <div className="small">COA files will appear here once uploaded.</div>
        ) : (
          coas.map(entry => (
            <div key={entry!.slug} className="coa-card">
              <div className="coa-name">{entry!.product.name}</div>
              <div className="small">{entry!.product.subtitle}</div>
              {entry!.meta.lot ? <div className="small">Lot: {entry!.meta.lot}</div> : null}
              {entry!.meta.date ? <div className="small">Date: {entry!.meta.date}</div> : null}
              {entry!.meta.lab ? <div className="small">Lab: {entry!.meta.lab}</div> : null}
              <div>
                <a
                  className="btn"
                  href={`/coas/${entry!.meta.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View COA
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      <hr className="hr" />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn btnPrimary" href="/shop">Shop</Link>
        <Link className="btn" href="/faq">FAQ</Link>
      </div>
    </div>
  );
}
