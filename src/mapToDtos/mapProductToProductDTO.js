import UID from '../lib/uid/UID';

import ProductDTO from '../dtos/ProductDTO';
import Product from '../entities/Product';

// TODO: Add check for souce type

export default function mapProductToProductDTO(product) {
  let uid = product.uid ? product.uid : UID.create();

  let productDto = new ProductDTO({ uid, name: product.name });

  return productDto;
}