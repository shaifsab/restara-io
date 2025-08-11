import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FiShoppingBag />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/menu" className="btn btn-primary">
              <FiArrowLeft />
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  
                  <div className="cart-item-badges">
                    {item.isVegetarian && (
                      <span className="badge vegetarian" title="Vegetarian">
                        🌱 Vegetarian
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="badge spicy" title="Spicy">
                        🌶️ Spicy
                      </span>
                    )}
                  </div>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn decrease"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      title="Decrease quantity"
                    >
                      <FiMinus />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn increase"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      title="Increase quantity"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  
                  <div className="cart-item-price">
                    <span className="unit-price">${item.price.toFixed(2)} each</span>
                    <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                    title="Remove from cart"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-sidebar">
            <div className="cart-summary">
              <h3>Order Summary</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Items ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${(totalPrice + 3.99 + totalPrice * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <button className="checkout-btn btn btn-primary">
                Proceed to Checkout
              </button>
              
              <div className="cart-actions">
                <Link to="/menu" className="btn btn-secondary">
                  Continue Shopping
                </Link>
                <button 
                  onClick={handleClearCart} 
                  className="clear-cart-btn"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="delivery-info">
              <h4>Delivery Information</h4>
              <div className="delivery-details">
                <div className="delivery-row">
                  <span>🚚 Delivery Time</span>
                  <span>30-45 mins</span>
                </div>
                <div className="delivery-row">
                  <span>📍 Delivery Area</span>
                  <span>Within 10 miles</span>
                </div>
                <div className="delivery-row">
                  <span>💳 Payment</span>
                  <span>Card or Cash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
