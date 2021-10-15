const OlxApi = require("olx-api");
const settings = require("../../settings.json");

const client = new OlxApi(
    settings.olx.host,
    settings.olx.clientId,
    settings.olx.clientSecret
)
    client.getTokens("client_credentials").then((res) => {
             console.log(res);
    }).catch((e) => {
        console.error("could not get olx token", e);
        process.exit();
    })

module.exports = client;

