import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal'; // Import it

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  
  // Local state for the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    // 1. Close Modal
    setIsModalOpen(false);
    
    // 2. Clear Global State
    dispatch({ type: 'CLEAR' });
    
    // 3. Show Success & Redirect
    alert("Payment Successful! Thank you for your order.");
    navigate('/'); 
  };

  if (cart.length === 0) return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Your cart is empty!</h2>;

  return (
    <div className="cart-container">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>Qty: {item.qty}</p>
          <button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
            Remove
          </button>
        </div>
      ))}
      
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem'}}>
        <h2>Total: ${total.toFixed(2)}</h2>
        
        {/* Trigger the Modal */}
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{backgroundColor: '#00C851', padding: '10px 20px'}}
        >
          Checkout
        </button>
      </div>

      {/* Render the Modal Component */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCheckout}
        total={total}
      />
    </div>
  );
};

export default CartPage;
