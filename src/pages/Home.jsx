import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext'; // Import our custom hook

const Home = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart(); // Access the global dispatch

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        // We simply pass the data to the child component
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
