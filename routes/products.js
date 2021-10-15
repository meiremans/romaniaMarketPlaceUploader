const express = require('express');
const router = express.Router();
const olxProductService = require("../services/olx/products");
const asyncHandler = require('express-async-handler');

/* Create new advertisement */
router.post('/new', asyncHandler(async function (req, res, next) {
  const product = req.body;
  try{
    const result = await olxProductService.add(product);
    console.log(result)
  }catch(e){
    console.log(e);
    throw(e);
  }


  //this is the route when a new product gets created. new products don't have variants yet
  res.send('respond with a resource');
}));




module.exports = router;
