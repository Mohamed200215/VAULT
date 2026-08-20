import { formatPrice, updateCartBadge, vaultStore } from '../store';

declare global {
  interface Window {
    vaultStore: typeof vaultStore;
    formatPrice: typeof formatPrice;
    updateCartBadge: typeof updateCartBadge;
  }
}

window.vaultStore = vaultStore;
window.formatPrice = formatPrice;
window.updateCartBadge = updateCartBadge;

window.addEventListener('DOMContentLoaded', updateCartBadge);
