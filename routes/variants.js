var express = require('express');
var router = express.Router();
const olxProduct = require("../services/olx/products");
const asyncHandler = require('express-async-handler')

/* Create new variant */
router.post('/new', asyncHandler(async (req, res, next) => {
    try {
        //on creation of a new variant, we expect the full product with an array of variants, with only one item inside
        const product = new Product(req.body);
        await olxProduct.add(product);

        res.send('respond with a resource');
    } catch (e) {
        return next(e);
    }
}))


class Product {
    constructor({
                    _id,
                    productAddedDate,
                    productBrand,
                    productDescription,
                    productDescription_ro,
                    productGtin,
                    productPermalink,
                    productPrice,
                    productPublished,
                    productStock,
                    productTags,
                    productTitle,
                    productTitle_ro
                }) {
        this._id = _id;
        this.productAddedDate = productAddedDate;
        this.productBrand = productBrand;
        this.productDescription = productDescription;
        this.productDescription_ro = productDescription_ro;
        this.productGtin = productGtin;
        this.productPermalink = productPermalink;
        this.productPrice = productPrice;
        this.productPublished = productPublished;
        this.productStock = productStock;
        this.productTags = productTags;
        this.productTitle = productTitle;
        this.productTitle_ro = productTitle_ro;
    }
}

class ProductWithVariants extends Product {
    constructor(props) {
        super(props);
        this.productVariants = props.productVariants;
    }
}


module.exports = router;
