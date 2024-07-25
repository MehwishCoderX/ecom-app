import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('Shoes');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    console.log('Selected option:', selectedOption);
  };

  const handleViewCart = () => {
    console.log('Viewing cart');
  };

  return (
    <>
    <div className='main-search'>
    <div className="search-bar">
      <select 
        value={selectedOption}
        onChange={handleDropdownChange}
        className="dropdown"
      >
        <option value=" Shoes">Shoes</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <div className='line'>

      </div>
      <input 
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="search-input"
      />
       <div className='line'></div>
      <button onClick={handleSearch} className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
     
    </div>
    
    <div>
    <button onClick={handleViewCart} className="view-cart-button">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>View Cart</span>
      </button>
    </div>
    </div>
    </>
  );
};

export default SearchBar;
