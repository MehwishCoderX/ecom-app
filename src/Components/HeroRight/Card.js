import React from 'react';
import './Card.css';

const Card = ({ picture, title, category, price, review }) => {
  return (
    <div className="card">
      <img src={picture} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Review: {review}</p>
      </div>
    </div>
  );
};

export default Card;
