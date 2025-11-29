import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1); // Local state for this specific card

  const handleAddToCart = () => {
    // We pass the product AND the selected quantity
    dispatch({ type: 'ADD', payload: { ...product, qty: Number(quantity) } });
    setQuantity(1); // Reset selector to 1 after adding
    alert(`Added ${quantity} ${product.title} to cart!`); // Optional feedback
  };

  return (
    <div className="card">
      {/* Wrap Image in Link */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      
      {/* Wrap Title in Link */}
      <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <h4>{product.title}</h4>
      </Link>
      <p>${product.price}</p>
      
      {/* Quantity Selector Section */}
      <div className="qty-wrapper">
        <label>Qty:</label>
        <select 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
