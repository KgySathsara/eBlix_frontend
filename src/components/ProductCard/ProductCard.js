import React from 'react';
//import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;