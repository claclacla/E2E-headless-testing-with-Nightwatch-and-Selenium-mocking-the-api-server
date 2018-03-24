import React from 'react';
import PropTypes from 'prop-types';

const GetProductButtonView = function ({ onClickHandler }) {
  return (
    <input type="button" value="Get products" id="getProducts" onClick={onClickHandler} />
  );
}

GetProductButtonView.propTypes = {
  onClickHandler: PropTypes.func.isRequired
}

export default GetProductButtonView