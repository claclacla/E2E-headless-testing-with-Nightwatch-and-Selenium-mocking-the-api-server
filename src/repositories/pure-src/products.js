import createPureSrc from '@App/lib/pure-src/src/createPureSrc'

// @ifdef E2ETEST
import E2eTestData from 'E2eTestData'
import foreRunnerDB from '@App/test/foreRunnerDBInit'

import deliveryMethod from '@App/lib/pure-src/src/deliveryMethods/ForeRunnerDB/foreRunnerDBDeliveryMethod'

import getRequest from '@App/lib/pure-src/src/repositories/inMemoryJsonDB/inMemoryJsonDBGetRequest'

let products = E2eTestData.products.map(productData => {
  let product = new ProductDTO({ uid: productData.uid, name: productData.name });
  return product;
});

foreRunnerDB.collection("Products").insert(products);

let source = foreRunnerDB.collection("Products");
// @endif

// @ifdef DEV
import AppConfig from 'AppConfig';

import deliveryMethod from '@App/lib/pure-src/src/deliveryMethods/fetch/fetchDeliveryMethod'

import getRequest from '@App/lib/pure-src/src/repositories/rest/restGetRequest'

let source = `${AppConfig.api.address}/products`;
// @endif

// @ifdef PROD
import AppConfig from 'AppConfig';

import deliveryMethod from '@App/lib/pure-src/src/deliveryMethods/fetch/fetchDeliveryMethod'

import getRequest from '@App/lib/pure-src/src/repositories/rest/restGetRequest'

let source = `${AppConfig.api.address}/products`;
// @endif

import UID from '@App/lib/uid/UID';

import Product from '@App/entities/Product';
import ProductDTO from '@App/dtos/ProductDTO';
import mapProductDTOToProduct from '@App/mapToEntities/mapProductDTOToProduct';
import mapProductToProductDTO from '@App/mapToDtos/mapProductToProductDTO';

let productsRepository = createPureSrc(
  source,
  deliveryMethod,
  mapProductDTOToProduct,
  mapProductToProductDTO);

// Create the repository methods

export const productsGetRequest = productsRepository(getRequest);