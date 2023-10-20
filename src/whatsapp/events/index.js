const qrcode = require("qrcode-terminal");
const { success } = require("logggger");
const client = require("../client");

const onQr = (qr) => {
  qrcode.generate(qr, { small: true });
};

const onReady = async () => {
  success("Client is ready!");
  const chats = await client.getChats();
  console.log(JSON.stringify(chats[1]));
};

const onAuthenticated = (session) => {
  success("Authenticated");
};

const onRemoteSessionSaved = () => {
  success("Remote session saved");
};

const onMessage = (message) => {
  console.log(message.body);
};

module.exports = {
  onQr,
  onReady,
  onAuthenticated,
  onRemoteSessionSaved,
  onMessage,
};
