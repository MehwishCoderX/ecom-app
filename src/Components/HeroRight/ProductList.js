

import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error('API response is not valid');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <Card
            key={product.id}
            picture={product.picture}
            title={product.title}
            category={product.category}
            price={product.price}
            review={product.review}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      {/* <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ProductList;
