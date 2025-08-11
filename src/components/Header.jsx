import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  const itemCount = getItemCount();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Restara</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Theme Toggle */}
            <button
              className="action-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* Cart */}
            <Link to="/cart" className="cart-btn">
              <FiShoppingCart />
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              title="Menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
