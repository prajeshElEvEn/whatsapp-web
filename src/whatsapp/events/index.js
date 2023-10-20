const qrcode = require("qrcode-terminal");
const { success } = require("logggger");

const onQr = (qr) => {
  qrcode.generate(qr, { small: true });
};

const onReady = () => {
  success("Client is ready!");
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