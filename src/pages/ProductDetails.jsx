import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Hooks for URL handling
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams(); // Grabs ":id" from the URL
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    // Fetch single product based on ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 style={{textAlign: 'center'}}>Loading details...</h2>;
  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD', payload: { ...product, qty: Number(qty) } });
    navigate('/cart'); // Optional: Redirect to cart after adding
  };

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="details-info">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h1>{product.title}</h1>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <h2 className="price">${product.price}</h2>

        {/* Quantity Selector */}
        <div className="actions">
          <select value={qty} onChange={(e) => setQty(e.target.value)}>
             {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
          </select>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
