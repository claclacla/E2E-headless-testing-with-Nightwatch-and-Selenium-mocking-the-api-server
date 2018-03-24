import React from 'react';
import PropTypes from 'prop-types';

import ProductListView from './View';

const ProductsList = function ({ products }) {
  return (
    <ProductListView products={products} />
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductsList