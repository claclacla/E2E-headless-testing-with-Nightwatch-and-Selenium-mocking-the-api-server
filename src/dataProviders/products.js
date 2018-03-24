import { createAsyncProducts } from '@App/actions/products';

export function getProducts() {
  return createAsyncProducts();
}