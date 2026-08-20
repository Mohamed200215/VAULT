import { beforeEach, describe, expect, it } from 'vitest';
import {
  addToCart,
  getCartTotal,
  getProducts,
  products,
  removeFromCart,
  sortProducts,
  updateCartQuantity
} from '../src/store';

beforeEach(() => {
  localStorage.clear();
});

describe('cart math', () => {
  it('totals an empty cart as 0', () => {
    expect(getCartTotal()).toBe(0);
  });

  it('sums price * quantity across entries, skipping unknown product ids', () => {
    addToCart('p1', 2); // 420 * 2 = 840
    addToCart('p9', 1); // 45 * 1 = 45
    addToCart('does-not-exist', 3);
    expect(getCartTotal()).toBe(885);
  });

  it('addToCart adds a new entry with the given quantity, defaulting to 1', () => {
    const cart = addToCart('p1');
    expect(cart).toEqual([{ id: 'p1', quantity: 1 }]);
  });

  it('addToCart increments quantity when the product is already in the cart', () => {
    addToCart('p1', 2);
    const cart = addToCart('p1', 3);
    expect(cart).toEqual([{ id: 'p1', quantity: 5 }]);
  });

  it('updateCartQuantity sets the quantity for the matching entry only', () => {
    addToCart('p1', 1);
    addToCart('p9', 1);
    const cart = updateCartQuantity('p1', 4);
    expect(cart).toEqual([
      { id: 'p1', quantity: 4 },
      { id: 'p9', quantity: 1 }
    ]);
  });

  it('updateCartQuantity clamps to a minimum of 1', () => {
    addToCart('p1', 1);
    const cart = updateCartQuantity('p1', -5);
    expect(cart).toEqual([{ id: 'p1', quantity: 1 }]);
  });

  it('removeFromCart drops only the matching entry', () => {
    addToCart('p1', 1);
    addToCart('p9', 2);
    const cart = removeFromCart('p1');
    expect(cart).toEqual([{ id: 'p9', quantity: 2 }]);
  });
});

describe('product filtering and sorting', () => {
  it('getProducts with no options returns every product', () => {
    expect(getProducts()).toHaveLength(products.length);
  });

  it('getProducts filters by category', () => {
    const apparel = getProducts({ category: 'apparel' });
    expect(apparel.length).toBeGreaterThan(0);
    expect(apparel.every((product) => product.category === 'apparel')).toBe(true);
  });

  it('getProducts filters by tag', () => {
    const results = getProducts({ tag: 'Retro' });
    expect(results.every((product) => product.tags.includes('Retro'))).toBe(true);
    expect(results.some((product) => product.id === 'p4')).toBe(true);
  });

  it('getProducts filters by case-insensitive search across name and brand', () => {
    const byName = getProducts({ search: 'kobe' });
    expect(byName.map((p) => p.id)).toEqual(['p2']);

    const byBrand = getProducts({ search: 'air jordan' });
    expect(byBrand.every((product) => product.brand === 'Air Jordan')).toBe(true);
  });

  it('sortProducts sorts ascending and descending by price', () => {
    const list = getProducts({ category: 'sneakers' });
    const asc = sortProducts(list, 'price-asc');
    const desc = sortProducts(list, 'price-desc');
    expect(asc.map((p) => p.price)).toEqual([...asc.map((p) => p.price)].sort((a, b) => a - b));
    expect(desc.map((p) => p.price)).toEqual([...desc.map((p) => p.price)].sort((a, b) => b - a));
  });

  it('sortProducts sorts alphabetically by name', () => {
    const sorted = sortProducts(products, 'name-asc');
    const names = sorted.map((p) => p.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });

  it('sortProducts leaves order unchanged for an unrecognized key', () => {
    expect(sortProducts(products, 'bogus-key')).toEqual(products);
  });
});
