var express = require('express');
var router = express.Router();

/* Create new advertisement */
router.post('/new', function(req, res, next) {
  const product = req.body;
  //this is the route when a new product gets created. new products don't have variants yet
  res.send('respond with a resource');
});




module.exports = router;
