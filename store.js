const vaultStore = {
  products: [
    {
      id: 'p1',
      brand: 'Nike',
      name: "Nike Wmns Total 90 Shox Magia 'Sail Metallic Silver'",
      price: 420,
      category: 'sneakers',
      badge: 'Hot',
      image: "Nike Wmns Total 90 Shox Magia 'Sail Metallic Silver'.webp",
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
      image: "Nike Zoom Kobe 4 Protro 'Draft Day Pack - Lakers'.png",
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
      image: "Air Jordan 5 Retro 'Black Carolina  UNC' 2026.png",
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
      image: "Air Jordan 11 Retro 'Cool Grey' 2021.png",
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
      image: "Vale Forever Dreams Zip Up Hoodie 'Pink'.png",
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
      image: "Godspeed F.T.D Hoodie 'Black Wash'.png",
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
      image: "Nike Wmns Total 90 SE 'Black White'.png",
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
      image: "A-Feeling x Saucony ProGrid Paramount 'Science of WOW'.png",
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
      image: "Fear of God Essentials Fleece Relaxed Sweatpants 'Crimson'.png",
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
      image: "Nike Air Max Joga Bonito R9 'Metallic Silver Varsity Maize'.png",
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
      image: "Fear of God Essentials Fleece Sweatpant 'Light Heather Grey'.png",
      description: 'Essentials fleece sweatpant in Light Heather Grey — tapered fit and premium fleece.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Light Heather Grey'],
      tags: ['Apparel']
    }
  ],

  getProduct(id) {
    return this.products.find((product) => product.id === id);
  },

  getCart() {
    try {
      return JSON.parse(localStorage.getItem('vaultCart') || '[]');
    } catch (error) {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem('vaultCart', JSON.stringify(cart));
  },

  addToCart(productId, quantity = 1) {
    const cart = this.getCart();
    const item = cart.find((entry) => entry.id === productId);
    if (item) {
      item.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity });
    }
    this.saveCart(cart);
    return cart;
  },

  removeFromCart(productId) {
    const cart = this.getCart().filter((entry) => entry.id !== productId);
    this.saveCart(cart);
    return cart;
  },

  updateCartQuantity(productId, quantity) {
    const cart = this.getCart().map((entry) => {
      if (entry.id === productId) {
        return { ...entry, quantity: Math.max(1, quantity) };
      }
      return entry;
    });
    this.saveCart(cart);
    return cart;
  },

  getCartTotal() {
    return this.getCart().reduce((total, entry) => {
      const product = this.getProduct(entry.id);
      return product ? total + product.price * entry.quantity : total;
    }, 0);
  },

  getCartCount() {
    return this.getCart().reduce((total, entry) => total + entry.quantity, 0);
  },

  getProducts(options = {}) {
    const { category, tag, search } = options;
    return this.products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesTag = tag ? product.tags.includes(tag) : true;
      const matchesSearch = search ? product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()) : true;
      return matchesCategory && matchesTag && matchesSearch;
    });
  },

  sortProducts(products, sortKey) {
    if (sortKey === 'price-asc') {
      return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortKey === 'price-desc') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    if (sortKey === 'name-asc') {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    }
    return products;
  }
};

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function updateCartBadge() {
  const count = vaultStore.getCartCount();
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

window.addEventListener('DOMContentLoaded', updateCartBadge);
