import type { CartEntry, Product, ProductFilterOptions, SortKey } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    brand: 'Nike',
    name: "Nike Wmns Total 90 Shox Magia 'Sail Metallic Silver'",
    price: 420,
    category: 'sneakers',
    badge: 'Hot',
    image: 'assets/images/products/nike-total90-shox-silver/1.png',
    images: [
      { src: 'assets/images/products/nike-total90-shox-silver/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/nike-total90-shox-silver/2.png', label: 'Side' },
      { src: 'assets/images/products/nike-total90-shox-silver/3.png', label: 'Side (Close-up)' },
      { src: 'assets/images/products/nike-total90-shox-silver/4.png', label: 'Sole' },
      { src: 'assets/images/products/nike-total90-shox-silver/5.png', label: 'Back' }
    ],
    description: 'A womens Total 90 Shox Magia in Sail Metallic Silver — lightweight, cushioned, and styled for classic football-inspired looks.',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['Sail / Metallic Silver'],
    tags: ['Hot', 'Trending']
  },
  {
    id: 'p2',
    brand: 'Nike',
    name: "Nike Zoom Kobe 4 Protro 'Draft Day Pack - Lakers'",
    price: 695,
    category: 'sneakers',
    badge: 'New',
    image: 'assets/images/products/nike-kobe4-protro-lakers/1.png',
    images: [
      { src: 'assets/images/products/nike-kobe4-protro-lakers/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/nike-kobe4-protro-lakers/2.png', label: 'Side' },
      { src: 'assets/images/products/nike-kobe4-protro-lakers/3.png', label: 'Side (Alt)' },
      { src: 'assets/images/products/nike-kobe4-protro-lakers/4.png', label: 'Sole' },
      { src: 'assets/images/products/nike-kobe4-protro-lakers/5.png', label: 'Back' }
    ],
    description: 'A Kobe 4 Protro honoring the Draft Day Pack — low-profile, responsive cushioning, and Lakers-themed details.',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Lakers Purple / Gold'],
    tags: ['New', 'Popular']
  },
  {
    id: 'p3',
    brand: 'Air Jordan',
    name: "Air Jordan 5 Retro 'Black Carolina / UNC' 2026",
    price: 480,
    category: 'sneakers',
    badge: 'Limited',
    image: 'assets/images/products/air-jordan-5-black-carolina/1.png',
    images: [
      { src: 'assets/images/products/air-jordan-5-black-carolina/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/air-jordan-5-black-carolina/2.png', label: 'Side' },
      { src: 'assets/images/products/air-jordan-5-black-carolina/3.png', label: 'Side (Alt)' },
      { src: 'assets/images/products/air-jordan-5-black-carolina/4.png', label: 'Sole' },
      { src: 'assets/images/products/air-jordan-5-black-carolina/5.png', label: 'Back' }
    ],
    description: 'A 2026 Air Jordan 5 Retro pairing Black and Carolina/UNC accents — premium materials and classic AJ5 silhouette.',
    sizes: ['8', '9', '10', '11'],
    colors: ['Black / Carolina / UNC'],
    tags: ['Limited', 'Retro']
  },
  {
    id: 'p4',
    brand: 'Air Jordan',
    name: "Air Jordan 11 Retro 'Cool Grey' 2021",
    price: 310,
    category: 'sneakers',
    badge: 'Retro',
    image: 'assets/images/products/air-jordan-11-cool-grey/1.png',
    images: [
      { src: 'assets/images/products/air-jordan-11-cool-grey/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/air-jordan-11-cool-grey/2.png', label: 'Side' },
      { src: 'assets/images/products/air-jordan-11-cool-grey/3.png', label: 'Side (Alt)' },
      { src: 'assets/images/products/air-jordan-11-cool-grey/4.png', label: 'Sole' },
      { src: 'assets/images/products/air-jordan-11-cool-grey/5.png', label: 'Back' }
    ],
    description: 'Air Jordan 11 Retro in Cool Grey colorway (2021) — classic patent leather mudguard, ballistic nylon upper, and retro styling.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Cool Grey / White'],
    tags: ['Retro', 'Popular']
  },
  {
    id: 'p5',
    brand: 'Vale Forever',
    name: "Vale Forever Dreams Zip Up Hoodie 'Pink'",
    price: 850,
    category: 'apparel',
    badge: 'New',
    image: 'assets/images/products/vale-forever-hoodie-pink/1.png',
    images: [
      { src: 'assets/images/products/vale-forever-hoodie-pink/1.png', label: 'Front' },
      { src: 'assets/images/products/vale-forever-hoodie-pink/2.png', label: 'Back' }
    ],
    description: 'A lightweight zip-up hoodie from the Vale Forever Dreams collection in Pink.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink'],
    tags: ['New']
  },
  {
    id: 'p6',
    brand: 'Godspeed F.T.D',
    name: "Godspeed F.T.D Hoodie 'Black Wash'",
    price: 295,
    category: 'apparel',
    badge: 'New',
    image: 'assets/images/products/godspeed-hoodie-black-wash/1.png',
    images: [
      { src: 'assets/images/products/godspeed-hoodie-black-wash/1.png', label: 'Front' },
      { src: 'assets/images/products/godspeed-hoodie-black-wash/2.png', label: 'Back' }
    ],
    description: 'Godspeed F.T.D signature hoodie in Black Wash — midweight, washed finish, and relaxed fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black Wash'],
    tags: ['New']
  },
  {
    id: 'p7',
    brand: 'Vault',
    name: 'Terraform 02 Sneaker',
    price: 540,
    category: 'sneakers',
    badge: 'New',
    image: 'assets/images/products/vault-terraform-02/1.png',
    images: [
      { src: 'assets/images/products/vault-terraform-02/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/vault-terraform-02/2.png', label: 'Side' },
      { src: 'assets/images/products/vault-terraform-02/3.png', label: 'Side (Alt)' },
      { src: 'assets/images/products/vault-terraform-02/4.png', label: 'Sole' },
      { src: 'assets/images/products/vault-terraform-02/5.png', label: 'Back' }
    ],
    description: 'An engineered trail-inspired silhouette with breathable mesh and a bold structural sole.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black / Teal'],
    tags: ['New']
  },
  {
    id: 'p8',
    brand: 'A-Feeling x Saucony',
    name: "A-Feeling x Saucony ProGrid Paramount 'Science of WOW'",
    price: 990,
    category: 'sneakers',
    badge: 'Used',
    image: 'assets/images/products/saucony-progrid-paramount/1.png',
    images: [
      { src: 'assets/images/products/saucony-progrid-paramount/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/saucony-progrid-paramount/2.png', label: 'Side' },
      { src: 'assets/images/products/saucony-progrid-paramount/3.png', label: 'Side (Alt)' },
      { src: 'assets/images/products/saucony-progrid-paramount/4.png', label: 'Sole' },
      { src: 'assets/images/products/saucony-progrid-paramount/5.png', label: 'Back' }
    ],
    description: 'A standout retro-future low top with chrome accents and a sculpted heel tab.',
    sizes: ['8', '9', '10', '11'],
    colors: ['Chrome / Black'],
    tags: ['Sale']
  },
  {
    id: 'p9',
    brand: 'Fear of God Essentials',
    name: "Fear of God Essentials Fleece Relaxed Sweatpants 'Crimson'",
    price: 45,
    category: 'apparel',
    badge: 'New',
    image: 'assets/images/products/fog-sweatpants-crimson/1.png',
    images: [
      { src: 'assets/images/products/fog-sweatpants-crimson/1.png', label: 'Front' },
      { src: 'assets/images/products/fog-sweatpants-crimson/2.png', label: 'Back' }
    ],
    description: 'Fear of God Essentials fleece relaxed sweatpants in Crimson — cozy, tapered fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Crimson'],
    tags: ['Apparel']
  },
  {
    id: 'p10',
    brand: 'Nike',
    name: "Nike Air Max Joga Bonito R9 'Metallic Silver Varsity Maize'",
    price: 38,
    category: 'accessories',
    badge: 'New',
    image: 'assets/images/products/nike-air-max-joga-bonito/1.png',
    images: [
      { src: 'assets/images/products/nike-air-max-joga-bonito/1.png', label: 'Front Pair' },
      { src: 'assets/images/products/nike-air-max-joga-bonito/2.png', label: 'Side' },
      { src: 'assets/images/products/nike-air-max-joga-bonito/3.png', label: 'Side (Alt)' },
      { src: 'assets/images/products/nike-air-max-joga-bonito/4.png', label: 'Sole' },
      { src: 'assets/images/products/nike-air-max-joga-bonito/5.png', label: 'Back' }
    ],
    description: 'Limited edition Nike Air Max Joga Bonito R9 accessory piece in Metallic Silver and Varsity Maize.',
    sizes: ['One size'],
    colors: ['Metallic Silver / Varsity Maize'],
    tags: ['Accessories']
  },
  {
    id: 'p11',
    brand: 'Fear of God Essentials',
    name: "Fear of God Essentials Fleece Sweatpant 'Light Heather Grey'",
    price: 180,
    category: 'apparel',
    badge: 'New',
    image: 'assets/images/products/fog-sweatpant-grey/1.png',
    images: [
      { src: 'assets/images/products/fog-sweatpant-grey/1.png', label: 'Front' },
      { src: 'assets/images/products/fog-sweatpant-grey/2.png', label: 'Back' }
    ],
    description: 'Essentials fleece sweatpant in Light Heather Grey — tapered fit and premium fleece.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Light Heather Grey'],
    tags: ['Apparel']
  }
];

const CART_STORAGE_KEY = 'vaultCart';

export function getProduct(id: string | null | undefined): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getCart(): CartEntry[] {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveCart(cart: CartEntry[]): void {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(productId: string, quantity = 1): CartEntry[] {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === productId);
  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string): CartEntry[] {
  const cart = getCart().filter((entry) => entry.id !== productId);
  saveCart(cart);
  return cart;
}

export function clearCart(): void {
  saveCart([]);
}

export function updateCartQuantity(productId: string, quantity: number): CartEntry[] {
  const cart = getCart().map((entry) => {
    if (entry.id === productId) {
      return { ...entry, quantity: Math.max(1, quantity) };
    }
    return entry;
  });
  saveCart(cart);
  return cart;
}

export function getCartTotal(): number {
  return getCart().reduce((total, entry) => {
    const product = getProduct(entry.id);
    return product ? total + product.price * entry.quantity : total;
  }, 0);
}

export function getCartCount(): number {
  return getCart().reduce((total, entry) => total + entry.quantity, 0);
}

export function getProducts(options: ProductFilterOptions = {}): Product[] {
  const { category, tag, search } = options;
  return products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesTag = tag ? product.tags.includes(tag) : true;
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesCategory && matchesTag && matchesSearch;
  });
}

export function sortProducts(list: Product[], sortKey?: SortKey | string | null): Product[] {
  if (sortKey === 'price-asc') {
    return [...list].sort((a, b) => a.price - b.price);
  }
  if (sortKey === 'price-desc') {
    return [...list].sort((a, b) => b.price - a.price);
  }
  if (sortKey === 'name-asc') {
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

export function updateCartBadge(): void {
  const count = getCartCount();
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  badge.textContent = String(count);
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

export const vaultStore = {
  products,
  getProduct,
  getCart,
  saveCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCartQuantity,
  getCartTotal,
  getCartCount,
  getProducts,
  sortProducts
};
