import { useState } from 'react';
import { createPortal } from 'react-dom';
import { vaultClient } from '../client';
import type { Product } from '../types';

interface ProductOptionsProps {
  product: Product;
  sizeContainer: HTMLElement;
  colorContainer: HTMLElement;
  addToCartContainer: HTMLElement;
}

function OptionButton({ value, selected, onSelect }: { value: string; selected: boolean; onSelect: () => void }) {
  const base = 'rounded-full border border-surface-variant bg-background/80 px-4 py-2 text-sm uppercase tracking-[0.18em] text-on-surface transition duration-200 hover:border-[#2f2fe4]';
  return (
    <button data-value={value} className={selected ? `${base} option-selected` : base} onClick={onSelect}>
      {value}
    </button>
  );
}

function flagMissingSelection(container: HTMLElement | null) {
  if (!container) return;
  container.style.outline = '2px solid #dc2626';
  container.style.outlineOffset = '6px';
  container.style.borderRadius = '1rem';
  container.style.transition = 'outline-color 300ms ease';
  setTimeout(() => {
    container.style.outline = 'none';
  }, 2000);
}

function showToast(html: string, isError = false) {
  const existing = document.getElementById('vault-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'vault-toast';
  toast.innerHTML = html;
  Object.assign(toast.style, {
    position: 'fixed',
    right: '20px',
    top: '20px',
    zIndex: '9999',
    background: isError
      ? 'linear-gradient(135deg, rgba(220,38,38,0.95), rgba(248,113,113,0.95))'
      : 'linear-gradient(135deg, rgba(47,47,228,0.95), rgba(192,193,255,0.95))',
    color: isError ? '#fff' : '#000',
    padding: '12px 16px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    minWidth: '260px'
  });
  const img = toast.querySelector('img');
  if (img) Object.assign(img.style, { width: '56px', height: '56px', borderRadius: '8px', objectFit: 'cover' });
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 300ms ease, transform 300ms ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 350);
  }, 2400);
}

export function ProductOptions({ product, sizeContainer, colorContainer, addToCartContainer }: ProductOptionsProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleAddToCart = () => {
    const missing: string[] = [];
    if (!selectedSize) missing.push('size');
    if (!selectedColor) missing.push('color');

    if (missing.length) {
      if (!selectedSize) flagMissingSelection(sizeContainer);
      if (!selectedColor) flagMissingSelection(colorContainer);
      showToast(
        `<div><div style="font-weight:700">Select a ${missing.join(' and ')} first</div><div style="font-size:13px">Choose both a size and a colorway before continuing.</div></div>`,
        true
      );
      return;
    }

    vaultClient.addToCart(product.id).then(() => {
      window.updateCartBadge();
      const toastHtml = `
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <div style="font-weight:700">Added to cart</div>
          <div style="font-size:13px">${product.name}</div>
          <div style="font-size:12px;opacity:0.9">Size: ${selectedSize} • Color: ${selectedColor}</div>
        </div>
      `;
      showToast(toastHtml);
    });
  };

  return (
    <>
      {createPortal(
        <>
          {product.sizes.map((size) => (
            <OptionButton key={size} value={size} selected={selectedSize === size} onSelect={() => setSelectedSize(size)} />
          ))}
        </>,
        sizeContainer
      )}
      {createPortal(
        <>
          {product.colors.map((color) => (
            <OptionButton key={color} value={color} selected={selectedColor === color} onSelect={() => setSelectedColor(color)} />
          ))}
        </>,
        colorContainer
      )}
      {createPortal(
        <button
          id="add-to-cart-button"
          className="flex-1 inline-flex h-14 items-center justify-center rounded-full bg-primary text-black transition hover:bg-[#a5a7ff]"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>,
        addToCartContainer
      )}
    </>
  );
}
