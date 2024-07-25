// import React from 'react';
// import './Card.css';

// const Card = ({ picture, title, category, price, review }) => {
//   return (
//     <div className="card">
//       <img src={picture} alt={title} className="card-image" />
//       <div className="card-content">
//         <h2>{title}</h2>
//         <p>Category: {category}</p>
//         <p>Price: ${price}</p>
//         <p>Review: {review}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from 'react';
import './Card.css';

const Card = ({ picture, title, category, price, review, onAddToCart }) => {
  const renderStars = (review) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < review) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="card">
      <img src={picture} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Review: {renderStars(review)}</p>
        <button onClick={onAddToCart} className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
