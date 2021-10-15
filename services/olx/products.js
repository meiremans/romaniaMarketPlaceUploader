const client = require("../olx/olxConnector");
const settings = require("../../settings.json");



const defaultLangOrRo = (field, object) => object[`${field}_ro`] ? object[`${field}_ro`] : object[`${field}`];


exports.add = async (product) => {
    const olxProduct = new OLXProduct(product);
    console.log(olxProduct)
    await client.getTokens("client_credentials").then(async (res) => {
        try{
            console.log(await client.post("/partner/product", olxProduct));
        }catch(e){
            console.log(e);
        }

    })

}

class OLXProduct {
    constructor(product) {

        this.title = defaultLangOrRo("productTitle", product);
        this.description = defaultLangOrRo("productDescription", product);

        this.category_id = settings.olx.categoryId;
        this.advertiser_type = settings.olx.adviserType;
        this.external_url = `${settings.webshopUrl}/${settings.webShopProductUrl}/${product.productPermalink}`;
        this.external_id = product._id;
        this.contact = settings.olx.contact;
        this.location = settings.olx.location;
        this.price = {
            value : parseFloat(product.productVariants[0].price),
            currency : "RON",
            "negotiable": false,
            "trade" : false
        };
        //on category furniture there are none
        this.attributes = [];
    }
}
