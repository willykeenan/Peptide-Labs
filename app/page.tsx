import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { FEATURED, RECENT } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <section className="card" style={{ padding: 22 }}>
        <div className="small" style={{ letterSpacing: 0.9, textTransform: "uppercase" }}>
          Premium compounds • NYC inventory • Documentation-forward
        </div>
        <h1 className="h1">Ascension Labs</h1>
        <p className="p" style={{ maxWidth: 820 }}>
          A clean, modern storefront demo for gathering feedback. Products are positioned for internal review with lot tracking, COA links, and a payments-ready checkout flow.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn btnPrimary" href="/shop">Shop</Link>
          <Link className="btn" href="/quality">Quality standards</Link>
          <Link className="btn" href="/collections">Collections</Link>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 16 }}>
          <div className="badge"><b>COA-linked</b><div className="small">COA placeholder pages per SKU.</div></div>
          <div className="badge"><b>Lot-tracked</b><div className="small">Structured metadata for scaling ops.</div></div>
          <div className="badge"><b>Checkout-ready</b><div className="small">Server route stub for a payment processor.</div></div>
          <div className="badge"><b>Compliance-ready</b><div className="small">Clear policies and acknowledgments.</div></div>
        </div>
      </section>

      <hr className="hr" />

      <section>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div>
            <h2 className="h2">Featured</h2>
            <div className="p" style={{ marginTop: 0 }}>Curated demo set for a clean presentation.</div>
          </div>
          <Link className="btn" href="/shop">View all</Link>
        </div>
        <ProductGrid products={FEATURED} />
      </section>

      <hr className="hr" />

      <section className="card">
        <h2 className="h2" style={{ marginTop: 0 }}>Built for feedback</h2>
        <p className="p" style={{ maxWidth: 900 }}>
          This demo includes: product detail pages, cart, checkout with RUO acknowledgment, and a payments route stub.
          Use it to collect opinions on design, taxonomy, product naming, and trust signals.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link className="btn btnPrimary" href="/checkout">Try checkout</Link>
          <Link className="btn" href="/faq">Read FAQ</Link>
        </div>
      </section>

      <hr className="hr" />

      <section>
        <h2 className="h2">Recent Products</h2>
        <ProductGrid products={RECENT} />
      </section>
    </>
  );
}
