const { error } = require("logggger");
const client = require("./client");
const {
  onQr,
  onReady,
  onAuthenticated,
  onMessage,
  onRemoteSessionSaved,
  onDisconnected,
  onGroupJoin,
  onGroupLeave,
} = require("./events");

const whatsapp = async () => {
  try {
    client.on("qr", await onQr);
    client.on("ready", await onReady);
    client.on("authenticated", await onAuthenticated);
    client.on("remote_session_saved", await onRemoteSessionSaved);
    client.on("message", await onMessage);
    client.on("group_join", await onGroupJoin);
    client.on("group_leave", await onGroupLeave);
    client.on("disconnected", await onDisconnected);
    await client.initialize();
  } catch (err) {
    error(err);
  }
};

module.exports = whatsapp;
