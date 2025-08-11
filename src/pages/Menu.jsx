import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { categories, getItemsByCategory, getAllItems } from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayItems, setDisplayItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState({
    vegetarian: false,
    spicy: false,
  });
  const location = useLocation();

  // Get category from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && ['starters', 'mains', 'desserts', 'beverages'].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  // Load items based on selected category
  useEffect(() => {
    let items = [];
    if (selectedCategory === 'all') {
      items = getAllItems();
    } else {
      items = getItemsByCategory(selectedCategory);
    }
    setDisplayItems(items);
  }, [selectedCategory]);

  // Apply filters
  useEffect(() => {
    let items = displayItems;
    
    // Apply category filters
    if (filters.vegetarian) {
      items = items.filter(item => item.isVegetarian);
    }
    
    if (filters.spicy) {
      items = items.filter(item => item.isSpicy);
    }
    
    setFilteredItems(items);
  }, [displayItems, filters]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleFilterChange = (filterType) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const clearFilters = () => {
    setFilters({
      vegetarian: false,
      spicy: false,
    });
  };

  return (
    <div className="menu-page">
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Discover our delicious selection of carefully crafted dishes</p>
        </div>

        {/* Filters */}
        <div className="menu-filters">
          {/* Category Filters */}
          <div className="category-filters">
            <button
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Items
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="category-emoji">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Diet Filters */}
          <div className="diet-filters">
            <div className="filter-group">
              <label className="filter-label">
                <input
                  type="checkbox"
                  checked={filters.vegetarian}
                  onChange={() => handleFilterChange('vegetarian')}
                  className="filter-checkbox"
                />
                <span className="checkmark">🌱</span>
                Vegetarian
              </label>
              <label className="filter-label">
                <input
                  type="checkbox"
                  checked={filters.spicy}
                  onChange={() => handleFilterChange('spicy')}
                  className="filter-checkbox"
                />
                <span className="checkmark">🌶️</span>
                Spicy
              </label>
            </div>
            {(filters.vegetarian || filters.spicy) && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Menu Items - Show filtered results when filters are active */}
        {(filters.vegetarian || filters.spicy || selectedCategory !== 'all') ? (
          <div className="menu-content">
            {filteredItems.length > 0 ? (
              <div className="menu-grid grid grid-3">
                {filteredItems.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="no-items">
                <div className="no-items-icon">🍽️</div>
                <h3>No items found</h3>
                <p>No items match your current filters</p>
                {(filters.vegetarian || filters.spicy) && (
                  <button onClick={clearFilters} className="btn btn-primary">
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Category Sections (when showing all items) */
          <div className="category-sections">
            {categories.map(category => {
              const categoryItems = getItemsByCategory(category.id);
              return (
                <section key={category.id} className="category-section">
                  <div className="category-section-header">
                    <h2>
                      <span className="category-emoji">{category.icon}</span>
                      {category.name}
                    </h2>
                    <p>{categoryItems.length} items</p>
                  </div>
                  <div className="grid grid-3">
                    {categoryItems.slice(0, 6).map(item => (
                      <MenuItem key={item.id} item={item} />
                    ))}
                  </div>
                  {categoryItems.length > 6 && (
                    <div className="category-section-footer">
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className="btn btn-secondary"
                      >
                        View All {category.name}
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
