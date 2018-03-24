import { productsGetRequest } from '../repositories/pure-src/products';
import getQueryString from '@App/lib/query-string/getQueryString';

export const CREATE_PRODUCTS = "CREATE_PRODUCTS";

function createProducts({ products }) {
  return {
    type: CREATE_PRODUCTS,
    products
  };
};

export function createAsyncProducts(filters) {
  return function (dispatch) {
    let queryString = getQueryString(filters);

    productsGetRequest(queryString)
      .then(products => {
        dispatch(createProducts({ products }));
      })
      .catch(error => { // error => { status, message }

      });
  }
}