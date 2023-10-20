const client = require("./client");
const { onQr, onReady, onAuthenticated, onMessage } = require("./events");

const whatsapp = async () => {
  client.on("qr", onQr);
  client.on("ready", onReady);
  client.on("authenticated", onAuthenticated);
  client.on("message", onMessage);

  await client.initialize();
};

module.exports = whatsapp;
