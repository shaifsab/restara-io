import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import './SearchBar.css';

const SearchBar = ({ isVisible, onSearch, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isVisible, onClose]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  if (!isVisible) return null;

  return (
    <div className={`search-bar ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-container">
            <FiSearch className="search-icon" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for dishes, ingredients, or cuisine..."
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="clear-btn"
                title="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="close-search-btn"
            title="Close search"
          >
            <FiX />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
