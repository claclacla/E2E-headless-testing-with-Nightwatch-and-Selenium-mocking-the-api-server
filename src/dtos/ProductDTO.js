import IDTO from './IDTO';

class ProductDTO extends IDTO {
  constructor({ uid, name }) {
    super(uid);

    if (name === undefined) {
      throw new Error("The name parameter is required");
    }

    this.name = name;
  }
}

export default ProductDTO;