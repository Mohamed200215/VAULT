export type Category = 'sneakers' | 'apparel' | 'accessories';

export interface ProductImage {
  src: string;
  label: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  category: Category;
  badge: string;
  image: string;
  images: ProductImage[];
  description: string;
  sizes: string[];
  colors: string[];
  tags: string[];
}

export interface CartEntry {
  id: string;
  quantity: number;
}

export interface ProductFilterOptions {
  category?: Category | null;
  tag?: string | null;
  search?: string | null;
}

export type SortKey = 'price-asc' | 'price-desc' | 'name-asc';
