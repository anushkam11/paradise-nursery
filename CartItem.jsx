import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from './CartSlice';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <main className="content cart"><h1>Your Shopping Cart</h1><p className="intro">Total plants: {count}</p><h2>Total cost: ${total.toFixed(2)}</h2>
    {items.length === 0 && <p>Your cart is empty. Discover a plant to get started!</p>}
    {items.map(item => <article className="cart-row" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-info"><h3>{item.name}</h3><p>Unit price: ${item.price.toFixed(2)}</p><p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p><div className="quantity"><button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decrementQuantity(item.id))}>−</button><strong>{item.quantity}</strong><button aria-label={`Increase ${item.name}`} onClick={() => dispatch(incrementQuantity(item.id))}>+</button></div><button className="remove" onClick={() => dispatch(removeItem(item.id))}>Delete</button></div></article>)}
    <div className="cart-actions"><button onClick={() => window.alert('Coming Soon!')}>Checkout</button><button className="secondary" onClick={() => navigate('plants')}>Continue Shopping</button></div>
  </main>;
}
