import Image from "next/image";
import Link from "next/link";
import CartButton from "@/components/cart/CartButton";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--border)", background: "rgba(0,0,0,.22)", position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(10px)" }}>
      <div className="container" style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 900, letterSpacing: 0.2, display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/images/brand/logo.svg"
            alt="Ascension Labs logo"
            width={28}
            height={28}
            style={{ width: 28, height: 28 }}
            priority
          />
          <span>Ascension Labs</span>
          <span className="pill">Demo</span>
        </Link>

        <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
          <Link href="/shop">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/quality">Quality</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
