import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { FEATURED, RECENT } from "@/lib/catalog.server";

export default function Home() {
  return (
    <>
      <section className="hero hero-primary">
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow">Precision compounds • Documentation-forward • NYC inventory</div>
            <h1 className="h1">Ascension Labs</h1>
            <p className="p hero-lede">
              A clean, modern storefront demo for gathering feedback. Products are positioned for internal review with lot tracking,
              COA links, and a payments-ready checkout flow.
            </p>

            <div className="hero-cta">
              <Link className="btn btnPrimary" href="/shop">Shop the catalog</Link>
              <Link className="btn" href="/quality">Quality standards</Link>
              <Link className="btn" href="/collections">Collections</Link>
            </div>

            <div className="trust-grid">
              <div className="trust-card">
                <div className="trust-icon" aria-hidden="true">COA</div>
                <div>
                  <div className="trust-title">COA-visible</div>
                  <div className="small">Placeholder COA pages per SKU.</div>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-icon" aria-hidden="true">LOT</div>
                <div>
                  <div className="trust-title">Lot-tracked</div>
                  <div className="small">Structured metadata for ops scaling.</div>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-icon" aria-hidden="true">PAY</div>
                <div>
                  <div className="trust-title">Checkout-ready</div>
                  <div className="small">Payments route stub in place.</div>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-icon" aria-hidden="true">POL</div>
                <div>
                  <div className="trust-title">Compliance-ready</div>
                  <div className="small">Clear policies + acknowledgments.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-card card">
            <div className="small" style={{ textTransform: "uppercase", letterSpacing: 0.8 }}>Quality snapshot</div>
            <h2 className="h2" style={{ marginTop: 10 }}>Built for fast internal review</h2>
            <div className="split-list">
              <div className="split-item">
                <div className="split-label">Documentation</div>
                <div className="small">COA links + lot placeholders</div>
              </div>
              <div className="split-item">
                <div className="split-label">Catalog</div>
                <div className="small">Blends, singles, accessories</div>
              </div>
              <div className="split-item">
                <div className="split-label">Checkout</div>
                <div className="small">Cart + RUO acknowledgment</div>
              </div>
            </div>
            <div className="hero-card-actions">
              <Link className="btn" href="/faq">Read FAQ</Link>
              <Link className="btn btnPrimary" href="/checkout">Try checkout</Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2 className="h2">Featured compounds</h2>
            <div className="p" style={{ marginTop: 0 }}>Curated demo set for a clean presentation.</div>
          </div>
          <Link className="btn" href="/shop">View all</Link>
        </div>
        <ProductGrid products={FEATURED} variant="featured" />
      </section>

      <hr className="hr" />

      <section className="section split-section">
        <div className="split-content">
          <div className="eyebrow">Why teams choose this demo</div>
          <h2 className="h2">Designed for fast iteration</h2>
          <p className="p">
            Highlight product naming, taxonomy, and documentation visuals without getting stuck in e-commerce plumbing.
            Use this as a clean baseline for stakeholder feedback.
          </p>
          <div className="hero-cta">
            <Link className="btn btnPrimary" href="/collections">Browse collections</Link>
            <Link className="btn" href="/quality">View quality</Link>
          </div>
        </div>
        <div className="split-card card">
          <div className="split-stat">
            <div className="split-stat-value">24h</div>
            <div className="small">Demo-ready iterations</div>
          </div>
          <div className="split-stat">
            <div className="split-stat-value">0%</div>
            <div className="small">Payment setup required</div>
          </div>
          <div className="split-stat">
            <div className="split-stat-value">100%</div>
            <div className="small">Component-based storefront</div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      <section className="section">
        <div className="section-head">
          <div>
            <h2 className="h2">Recent products</h2>
            <div className="p" style={{ marginTop: 0 }}>Latest additions for quick review.</div>
          </div>
          <Link className="btn" href="/shop">Shop all</Link>
        </div>
        <ProductGrid products={RECENT} />
      </section>
    </>
  );
}
