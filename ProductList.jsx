import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { plants } from './plants';

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const categories = [...new Set(plants.map(plant => plant.category))];
  return <main className="content"><h1>Choose your plants</h1><p className="intro">Find a new favorite for your home.</p>
    {categories.map(category => <section key={category}><h2>{category}</h2><div className="products">
      {plants.filter(plant => plant.category === category).map(plant => {
        const added = items.some(item => item.id === plant.id);
        return <article className="product" key={plant.id}><img src={plant.image} alt={plant.name} loading="lazy"/><div className="product-body"><h3>{plant.name}</h3><p className="price">${plant.price.toFixed(2)}</p><button disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? 'Added to Cart' : 'Add to Cart'}</button></div></article>;
      })}
    </div></section>)}
  </main>;
}
