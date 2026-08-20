import { formatPrice, updateCartBadge, vaultStore } from '../store';

window.vaultStore = vaultStore;
window.formatPrice = formatPrice;
window.updateCartBadge = updateCartBadge;

window.addEventListener('DOMContentLoaded', updateCartBadge);
