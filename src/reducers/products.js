import { CREATE_PRODUCTS } from '@App/actions/products';

function products(state = {
  data: []
}, action) {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        ...{
          data: action.products
        }
      }
    default:
      return state;
  }
};

export default products;