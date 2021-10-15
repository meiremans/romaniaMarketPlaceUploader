const {
    serial: test
} = require('ava');
const {
    request
} = require('../helper');

test.before(async () => {

});

const product = {
    "_id": "61275ed34f44dd4279b91cbb",
    "productPermalink": "testproduct",
    "productTitle": "testproduct",
    "productPrice": "50.00",
    "productDescription": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    "productGtin": "",
    "productBrand": "",
    "productPublished": true,
    "productTags": "",
    "productComment": false,
    "productAddedDate": "2021-08-26T09:28:51.298Z",
    "productStock": null,
    "productStockDisable": false,
    "variants": [
        {
            "product": "61275ed34f44dd4279b91cbb",
            "title": "fgfgfg",
            "price": "50.66",
            "stock": 785,
            "added": "2021-08-31T01:13:22.865Z",
            "_id": "612d8232b137d44a102bc123"
        }
    ],
    "productVariants": [
            {
                "product": "61275ed34f44dd4279b91cbb",
                "title": "fgfgfg",
                "price": "50.66",
                "stock": 785,
                "added": "2021-08-31T01:13:22.865Z",
                "_id": "612d8232b137d44a102bc123"
            }
        ]
}


test('[Success] is started', async t => {

    const res = await (await request
        .get('/')
        .send()
        .expect(200));
    t.truthy(res.body)
});


test('[Success] Add product to olx', async t => {

    const res = await request
        .post('/product/new')
        .send(product)
        .expect(200);

});
