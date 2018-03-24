import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '@App/dataProviders/products';
import GetProductButtonView from './View';

const GetProductButton = function ({ getProducts }) {
  const onClickHandler = () => {
    getProducts();
  }

  return (
    <GetProductButtonView onClickHandler={onClickHandler} />
  );
}

GetProductButton.propTypes = {
  getProducts: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(GetProductButton)