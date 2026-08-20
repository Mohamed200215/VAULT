import { createRoot } from 'react-dom/client';
import { vaultClient } from '../client';
import { ProductOptions } from '../components/ProductOptions';

function getQueryParam(name: string): string | null {
  return new URLSearchParams(window.location.search).get(name);
}

async function mount() {
  const productId = getQueryParam('id');
  const product = await vaultClient.getProduct(productId);
  if (!product) return;

  const sizeContainer = document.getElementById('size-options');
  const colorContainer = document.getElementById('color-options');
  const addToCartContainer = document.getElementById('add-to-cart-mount');
  if (!sizeContainer || !colorContainer || !addToCartContainer) return;

  const root = document.createElement('div');
  createRoot(root).render(
    <ProductOptions
      product={product}
      sizeContainer={sizeContainer}
      colorContainer={colorContainer}
      addToCartContainer={addToCartContainer}
    />
  );
}

mount();
