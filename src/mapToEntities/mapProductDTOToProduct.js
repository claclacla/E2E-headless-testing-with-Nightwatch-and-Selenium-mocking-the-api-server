import ProductDTO from '../dtos/ProductDTO';
import Product from '../entities/Product';

// TODO: Add check for souceDto type

export default function mapProductDTOToProduct(productDto) {
  let product = new Product({ uid: productDto.uid, name: productDto.name });

  return product;
}