const OlxApi = require("olx-api");
const settings = require("settings.json");

const client = new OlxApi(
    // e.g. https://www.olx.ro/api
    process.env.OLX_HOST,
    // your client id
    process.env.CLIENT_ID,
    // your client secret
    process.env.CLIENT_SECRET
)
try {
    await client.getTokens("client_credentials");
} catch (e) {
    console.error("could get olx token", e);
    process.exit();
}


const defaultLangOrRo = (field, object) => object[`${field}_ro`] ? object[`${field}_ro`] : object[`${field}`];


exports.add = async (product) => {
    const olxProduct = new OLXProduct(product);
    await client.post("/partner/adverts", olxProduct);
}

class OLXProduct {
    constructor(product) {
        this.title = defaultLangOrRo("productTitle", product);
        this.description = defaultLangOrRo("productDescription", product);

        //todo: how to get categroy ids
        this.category_id = product.category_id;
        this.advertiser_type = settings.advertiser_type;
        this.external_url = `${settings.webshopUrl}/${settings.webShopProductUrl}/${product.productPermalink}`;
        this.external_id = product._id;
        this.contact = settings.contact;
        this.location = settings.location;
        this.price = product.productVariants[0].price;

        //todo: attributes code is free to do whatever or not?
        this.attributes = {
            "attributes": [
                {
                    "code": "state",
                    "value": "new"
                },
                {
                    "code": "size",
                    "value": 35
                },
                {
                    "code": "type",
                    "value": "woman"
                }
            ]
        }
    }
}
