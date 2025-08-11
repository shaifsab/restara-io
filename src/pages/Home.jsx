import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import MenuItem from '../components/MenuItem';
import { getAllItems, categories } from '../data/menuData';
import './Home.css';

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const allItems = getAllItems();
    const featured = allItems.slice(0, 6); // Get first 6 items as featured
    setFeaturedItems(featured);
  }, []);

  const stats = [
    { icon: FiStar, label: 'Rating', value: '4.9/5' },
    { icon: FiAward, label: 'Awards', value: '12+' },
    { icon: FiUsers, label: 'Happy Customers', value: '10K+' },
    { icon: FiClock, label: 'Years Serving', value: '15+' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&crop=center" 
            alt="Restaurant interior" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="brand-name">Restara</span>
            </h1>
            <p className="hero-subtitle">
              Experience culinary excellence with our carefully crafted dishes, 
              made from the finest ingredients and served with passion.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary hero-btn">
                Explore Menu
                <FiArrowRight />
              </Link>
              <button className="btn btn-secondary hero-btn">
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <h2>Our Menu Categories</h2>
            <p>Discover our diverse selection of delicious dishes</p>
          </div>
          
          <div className="categories-grid">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/menu?category=${category.id}`} 
                className="category-card"
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <span className="category-link">
                  View Items <FiArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Featured Dishes</h2>
            <p>Try our chef's special recommendations</p>
          </div>
          
          <div className="grid grid-3">
            {featuredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/menu" className="btn btn-primary">
              View Full Menu
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                For over 15 years, Restara has been committed to serving 
                exceptional cuisine in a warm and welcoming atmosphere. 
                Our passion for food and dedication to quality has made 
                us a favorite destination for food lovers.
              </p>
              <p>
                Every dish is prepared with care using only the finest 
                ingredients, ensuring that each bite is a memorable experience 
                that keeps our guests coming back for more.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
                <FiArrowRight />
              </Link>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center" 
                alt="Chef preparing food" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
