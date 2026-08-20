import { useCallback, useEffect, useState } from 'react';
import { vaultClient } from '../client';
import { formatPrice } from '../store';
import type { Product } from '../types';

interface CartRow {
  product: Product;
  quantity: number;
}

async function loadCartRows(): Promise<CartRow[]> {
  const entries = await vaultClient.getCart();
  const rows: CartRow[] = [];
  for (const entry of entries) {
    const product = await vaultClient.getProduct(entry.id);
    if (product) {
      rows.push({ product, quantity: entry.quantity });
    }
  }
  return rows;
}

export function CartList() {
  const [rows, setRows] = useState<CartRow[] | null>(null);

  const refresh = useCallback(() => {
    loadCartRows().then(setRows);
    window.updateCartBadge?.();
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (!rows) return;
    const total = rows.reduce((sum, row) => sum + row.product.price * row.quantity, 0);
    const totalNode = document.getElementById('cart-total');
    if (totalNode) totalNode.textContent = formatPrice(total);
    const checkoutButton = document.getElementById('checkout-button') as HTMLButtonElement | null;
    if (checkoutButton) checkoutButton.disabled = rows.length === 0;
  }, [rows]);

  const handleQuantityChange = (productId: string, value: string) => {
    const quantity = Number(value);
    if (!Number.isNaN(quantity) && quantity > 0) {
      vaultClient.updateCartQuantity(productId, quantity).then(refresh);
    }
  };

  const handleRemove = (productId: string) => {
    vaultClient.removeFromCart(productId).then(refresh);
  };

  if (rows === null) {
    return null;
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-[#333] bg-surface p-10 text-center text-on-surface-variant">
        <p>Your cart is empty. Add products from the storefront.</p>
        <a
          href="listings.html"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-primary px-6 text-sm font-label-caps uppercase tracking-[0.24em] text-primary transition hover:bg-primary hover:text-black"
        >
          Continue shopping
        </a>
      </div>
    );
  }

  return (
    <>
      {rows.map(({ product, quantity }) => (
        <div key={product.id} className="cart-item rounded-[1.75rem] border border-[#333] bg-surface p-6 shadow-[0_20px_50px_rgba(0,0,0,0.17)]">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]">
            <img className="h-36 w-full rounded-3xl object-cover" src={product.image} alt={product.name} />
            <div className="flex flex-col justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-secondary">{product.brand}</p>
                <h2 className="mt-2 text-2xl font-headline-md uppercase text-white">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">{product.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <label className="text-sm uppercase tracking-[0.24em] text-secondary" htmlFor={`qty-${product.id}`}>
                    Qty
                  </label>
                  <input
                    id={`qty-${product.id}`}
                    className="quantity-input rounded-lg border border-[#333] bg-background/80 px-3 py-2 text-sm text-on-surface"
                    type="number"
                    min={1}
                    defaultValue={quantity}
                    key={quantity}
                    onChange={(event) => handleQuantityChange(product.id, event.target.value)}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-data-mono text-xl text-primary">{formatPrice(product.price * quantity)}</p>
                  <button
                    className="rounded-full border border-surface-variant px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-on-surface transition hover:border-[#2f2fe4]"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
