import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const navigate = target => { setPage(target); window.scrollTo(0, 0); };
  return <><header className="navbar"><button className="brand" onClick={() => navigate('home')}>🌿 Paradise Nursery</button><nav><button onClick={() => navigate('home')}>Home</button><button onClick={() => navigate('plants')}>Plants</button><button onClick={() => navigate('cart')}>Cart ({count})</button></nav></header>
    {page === 'home' ? <><section className="hero"><div className="hero-content"><span className="eyebrow">WELCOME TO PARADISE NURSERY</span><h1>Bring nature home.</h1><p>Beautiful indoor plants, thoughtfully chosen for your space.</p><button onClick={() => navigate('plants')}>Get Started</button></div></section><AboutUs/></> : page === 'plants' ? <ProductList/> : <CartItem navigate={navigate}/>}
    <footer>© {new Date().getFullYear()} Paradise Nursery · Grow something beautiful.</footer>
  </>;
}
