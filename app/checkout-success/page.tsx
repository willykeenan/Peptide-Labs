import Link from "next/link";

export default function CheckoutSuccess({ searchParams }: { searchParams: { note?: string } }) {
  return (
    <div className="card">
      <h1 style={{ marginTop: 0 }}>Success (demo)</h1>
      <p className="p" style={{ maxWidth: 900 }}>
        This is a demo “success” page returned by the checkout API route. Replace with real payment confirmation + order creation.
      </p>
      {searchParams?.note ? <div className="small">Note: {searchParams.note}</div> : null}
      <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn btnPrimary" href="/shop">Back to shop</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </div>
  );
}
