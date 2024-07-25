import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('API response is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
