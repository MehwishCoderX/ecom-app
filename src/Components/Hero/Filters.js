
// components/Filters.js
import './Filters.css';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const Filters = () => {
  const [categories, setCategories] = useState({
    category1: false,
    category2: false,
    category3: false,
  });
  const [stockStatus, setStockStatus] = useState({
    instock: false,
    outstock: false,
  });
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const handleCategoryChange = (event) => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.checked,
    });
  };

  const handleStockStatusChange = (event) => {
    setStockStatus({
      ...stockStatus,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className='main-filters'>
      <div className="filters">
        <div className="filter-icon">
          <FaFilter size={24} />
          <span>Filters</span>
        </div>
        <div className='line2'></div>
        <div className="filter-categories">
          <h3>Categories</h3>
          <label>
            <input
              type="checkbox"
              name="category1"
              checked={categories.category1}
              onChange={handleCategoryChange}
            />
            Category 1
          </label>
          <label>
            <input
              type="checkbox"
              name="category2"
              checked={categories.category2}
              onChange={handleCategoryChange}
            />
            Category 2
          </label>
          <label>
            <input
              type="checkbox"
              name="category3"
              checked={categories.category3}
              onChange={handleCategoryChange}
            />
            Category 3
          </label>
        </div>
        <div className='line2'></div>
        <div className="filter-stock-status">
          <h3>Stock Status</h3>
          <label>
            <input
              type="checkbox"
              name="instock"
              checked={stockStatus.instock}
              onChange={handleStockStatusChange}
            />
            In Stock
          </label>
          <label>
            <input
              type="checkbox"
              name="outstock"
              checked={stockStatus.outstock}
              onChange={handleStockStatusChange}
            />
            Out of Stock
          </label>
        </div>
        <div className='line2'></div>
        <div className="filter-size">
          <h3>Size</h3>
          <select value={size} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
        <div className='line2'></div>
        <div className="filter-color">
          <h3>Color</h3>
          <select value={color} onChange={handleColorChange}>
            <option value="">Select Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
      </div>
      <div className='line3'></div>
    </div>
  );
};

export default Filters;
