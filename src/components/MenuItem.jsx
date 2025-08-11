import { useState } from 'react';
import { FiPlus, FiMinus, FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  
  const quantity = getItemQuantity(item.id);

  const handleAddToCart = () => {
    addItem(item);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      updateQuantity(item.id, quantity - 1);
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center';
    setIsImageLoading(false);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="menu-item fade-in">
      <div className="menu-item-image-container">
        {isImageLoading && (
          <div className="image-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
        <img
          src={item.image}
          alt={item.name}
          className={`menu-item-image ${isImageLoading ? 'loading' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Item badges */}
        <div className="item-badges">
          {item.isVegetarian && (
            <span className="badge vegetarian" title="Vegetarian">
              🌱
            </span>
          )}
          {item.isSpicy && (
            <span className="badge spicy" title="Spicy">
              🌶️
            </span>
          )}
        </div>

        {/* Like button */}
        <button 
          className={`like-btn ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
          title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FiHeart fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item.name}</h3>
          <span className="menu-item-price">${item.price.toFixed(2)}</span>
        </div>

        <p className="menu-item-description">{item.description}</p>

        <div className="menu-item-footer">
          {quantity > 0 ? (
            <div className="quantity-controls">
              <button 
                className="quantity-btn decrease"
                onClick={handleDecreaseQuantity}
                title="Decrease quantity"
              >
                <FiMinus />
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                className="quantity-btn increase"
                onClick={handleIncreaseQuantity}
                title="Increase quantity"
              >
                <FiPlus />
              </button>
            </div>
          ) : (
            <button 
              className="add-to-cart-btn btn btn-primary"
              onClick={handleAddToCart}
            >
              <FiPlus />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
