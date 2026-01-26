export default function FAQPage() {
  return (
    <div className="card">
      <h1 style={{ marginTop: 0, marginBottom: 6 }}>FAQ</h1>
      <p className="p" style={{ maxWidth: 980, marginTop: 0 }}>
        Demo FAQ. This is where you answer questions without implying human use.
      </p>

      <div className="grid" style={{ marginTop: 14 }}>
        <div className="badge">
          <b>How is documentation handled?</b>
          <div className="small" style={{ marginTop: 6 }}>
            Each product includes a COA link (demo placeholder) and lot-tracking fields to show how documentation could be presented in production.
          </div>
        </div>

        <div className="badge">
          <b>Do you provide protocols or dosing guidance?</b>
          <div className="small" style={{ marginTop: 6 }}>
            No. We do not provide medical guidance, dosing, or administration instructions.
          </div>
        </div>

        <div className="badge">
          <b>Where can I find COAs?</b>
          <div className="small" style={{ marginTop: 6 }}>
            Each product includes a COA link (demo placeholder). In production, COAs should be available per lot.
          </div>
        </div>

        <div className="badge">
          <b>Shipping & returns?</b>
          <div className="small" style={{ marginTop: 6 }}>
            Add final policy text here (carriers, timelines, temperature considerations, and returns rules).
          </div>
        </div>
      </div>
    </div>
  );
}
