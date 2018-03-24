import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsList from './components/ProductsList/'
import GetProductButton from './components/GetProductButton/'

const HomeContainerView = function ({ products }) {
  return (
    <div>
      <ProductsList products={products} />
      <br />
      <GetProductButton />
    </div>
  );
}

HomeContainerView.propTypes = {
  products: PropTypes.array.isRequired,
}

function mapStateToProps({ products }) {
  return {
    products: products.data
  }
}

export default connect(
  mapStateToProps
)(HomeContainerView)