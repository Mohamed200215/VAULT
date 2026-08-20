import * as store from './store';
import type { CartEntry, Product, ProductFilterOptions } from './types';

/**
 * Typed async wrapper around the local, localStorage-backed store logic.
 * Every method returns a Promise even though the underlying data is local,
 * so callers are written the same way they would be against a real API.
 */
export const vaultClient = {
  async getProducts(options?: ProductFilterOptions): Promise<Product[]> {
    return store.getProducts(options);
  },

  async getProduct(id: string | null | undefined): Promise<Product | undefined> {
    return store.getProduct(id);
  },

  async getCart(): Promise<CartEntry[]> {
    return store.getCart();
  },

  async addToCart(productId: string, quantity = 1): Promise<CartEntry[]> {
    return store.addToCart(productId, quantity);
  },

  async updateCartQuantity(productId: string, quantity: number): Promise<CartEntry[]> {
    return store.updateCartQuantity(productId, quantity);
  },

  async removeFromCart(productId: string): Promise<CartEntry[]> {
    return store.removeFromCart(productId);
  },

  async getCartTotal(): Promise<number> {
    return store.getCartTotal();
  }
};

export type VaultClient = typeof vaultClient;
