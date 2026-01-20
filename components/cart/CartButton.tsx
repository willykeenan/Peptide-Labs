"use client";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartButton() {
  const { state } = useCart();
  const count = state.lines.reduce((n, l) => n + l.qty, 0);

  return (
    <Link href="/cart" className="btn" style={{ padding: "8px 12px" }}>
      Cart ({count})
    </Link>
  );
}
