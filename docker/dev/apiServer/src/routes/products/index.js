const express = require('express');
const router = express.Router();

const UID = require("../../lib/uid/UID");
const ProductDTO = require("../../dtos/ProductDTO");

var products = [
  new ProductDTO({ uid: UID.create(), name: "Product name" }),
  new ProductDTO({ uid: UID.create(), name: "Another product name" }),
];

router
  .get('/', function (req, res, next) {
    res.send({
      data: products
    });
  });

module.exports = router;