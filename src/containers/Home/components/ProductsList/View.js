import React from 'react';
import PropTypes from 'prop-types';

const ProductsListView = function ({ products }) {
  return (
    <div>
      {products && products.map((product, index) => (
        <div className="products" key={index}>{product.name}</div>
      ))}
    </div>
  );
}

ProductsListView.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductsListView