import { createRoot } from 'react-dom/client';
import { CartList } from '../components/CartList';

const container = document.getElementById('cart-list');
if (container) {
  createRoot(container).render(<CartList />);
}
