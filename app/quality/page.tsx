import Link from "next/link";

export default function QualityPage() {
  return (
    <div className="card">
      <h1 style={{ marginTop: 0, marginBottom: 6 }}>Quality standards</h1>
      <p className="p" style={{ maxWidth: 980, marginTop: 0 }}>
        This page is designed to mirror the type of “trust” content shoppers look for: documentation, COAs, lot tracking, storage/handling language.
        Keep it factual and policy-safe (no outcomes/claims).
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 14 }}>
        <div className="badge">
          <b>COA per lot</b>
          <div className="small" style={{ marginTop: 6 }}>COA links are available on product cards and product pages.</div>
        </div>
        <div className="badge">
          <b>Lot tracking</b>
          <div className="small" style={{ marginTop: 6 }}>Structured SKUs with lot IDs for operational scalability.</div>
        </div>
        <div className="badge">
          <b>Controlled handling</b>
          <div className="small" style={{ marginTop: 6 }}>Add SOP language (storage, handling, shipping) once finalized.</div>
        </div>
        <div className="badge">
          <b>Compliance-first</b>
          <div className="small" style={{ marginTop: 6 }}>No dosage/protocol guidance. No therapeutic claims.</div>
        </div>
      </div>

      <hr className="hr" />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn btnPrimary" href="/shop">Shop</Link>
        <Link className="btn" href="/faq">FAQ</Link>
      </div>
    </div>
  );
}
