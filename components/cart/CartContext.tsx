"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";
import { PRODUCTS } from "@/lib/catalog";

export type CartLine = { productId: string; qty: number };
type CartState = { lines: CartLine[] };

type CartCtx = {
  state: CartState;
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  getProduct: (id: string) => Product | undefined;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>({ lines: [] });

  const getProduct = (id: string) => PRODUCTS.find(p => p.id === id);

  const subtotal = useMemo(() => {
    return state.lines.reduce((sum, l) => {
      const p = getProduct(l.productId);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);
  }, [state]);

  const add = (productId: string, qty = 1) => {
    setState(prev => {
      const existing = prev.lines.find(l => l.productId === productId);
      if (existing) {
        return { lines: prev.lines.map(l => l.productId === productId ? { ...l, qty: l.qty + qty } : l) };
      }
      return { lines: [...prev.lines, { productId, qty }] };
    });
  };

  const remove = (productId: string) => setState(prev => ({ lines: prev.lines.filter(l => l.productId !== productId) }));
  const setQty = (productId: string, qty: number) =>
    setState(prev => ({ lines: prev.lines.map(l => l.productId === productId ? { ...l, qty: Math.max(1, qty) } : l) }));
  const clear = () => setState({ lines: [] });

  const value: CartCtx = { state, add, remove, setQty, clear, subtotal, getProduct };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
