import IEntity from './IEntity';

class Product extends IEntity {
  constructor({ uid, name }) {
    super(uid);

    if (name === undefined) {
      throw new Error("The name parameter is required");
    }

    this.name = name;
  }
}

export default Product;