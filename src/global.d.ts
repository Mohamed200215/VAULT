import type { formatPrice, updateCartBadge, vaultStore } from './store';

declare global {
  interface Window {
    vaultStore: typeof vaultStore;
    formatPrice: typeof formatPrice;
    updateCartBadge: typeof updateCartBadge;
  }
}
