const CheckoutModal = ({ isOpen, onClose, onConfirm, total }) => {
  if (!isOpen) return null; // The magic line: Don't render if closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Order Summary</h2>
        <p>You are about to purchase items for:</p>
        <div className="total-price">${total.toFixed(2)}</div>
        
        <p style={{fontSize: '0.9rem', color: '#666', margin: '1rem 0'}}>
          This is a demo store. No actual payment will be taken.
        </p>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
