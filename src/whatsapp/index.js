const { error } = require("logggger");
const client = require("./client");
const {
  onQr,
  onReady,
  onAuthenticated,
  onMessage,
  onRemoteSessionSaved,
} = require("./events");

const whatsapp = async () => {
  try {
    client.on("qr", onQr);
    client.on("ready", onReady);
    client.on("authenticated", onAuthenticated);
    client.on("remote_session_saved", onRemoteSessionSaved);
    client.on("message", onMessage);

    await client.initialize();
  } catch (err) {
    error(err);
  }
};

module.exports = whatsapp;
