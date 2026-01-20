export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "rgba(0,0,0,.22)" }}>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 18 }}>
        <div className="small">
          <b>Research Use Only (RUO).</b> Products are supplied strictly for laboratory research and analytical purposes only.
          <b> Not for human or veterinary use.</b> No medical advice. No therapeutic claims.
        </div>
        <div className="small" style={{ marginTop: 10 }}>
          Ascension Labs — New York, NY (demo) • © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
