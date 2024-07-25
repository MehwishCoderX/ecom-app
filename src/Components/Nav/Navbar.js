import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
// import Vector from '..../assets/Vector.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SP
        {/* <img src={Vector} alt="" width="27" height="55" /> */}
        O
         RT</div>
      <div className="nav-links">
        <a href="#products">Products</a>
        <a href="#track-order">Track Order</a>
        <a href="#contact-us">Contact Us</a>
        <a href="#about-us">About Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
