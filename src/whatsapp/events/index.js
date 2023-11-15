const qrcode = require("qrcode-terminal");
const { success, warn, error, log } = require("logggger");
const client = require("../client");
const { pingMessage } = require("../../jobs");
const { uploadGroups, updateGroups } = require("../activities");
const { job } = require("../../utils");
const { CronJob } = require("cron");

const onQr = (qr) => {
  qrcode.generate(qr, { small: true });
};

const onReady = async () => {
  success("Client is ready!");
  await uploadGroups(client);
  const job = new CronJob(
    "0 * * * * *",
    async () => {
      await client.sendMessage("916393318060-1613392542@g.us", "pong");
    },
    null,
    true
  );
};

const onAuthenticated = () => {
  success("Authenticated");
};

const onRemoteSessionSaved = () => {
  success("Remote session saved");
};

const onDisconnected = async () => {
  success("Client disconnected");
  await client.destroy();
  await client.initialize();
};

const onMessage = (message) => {
  log(message.body);
};

const onGroupJoin = async (notification) => {
  await updateGroups(client, notification);
};

const onGroupLeave = async (notification) => {
  await updateGroups(client, notification);
};

module.exports = {
  onQr,
  onReady,
  onAuthenticated,
  onRemoteSessionSaved,
  onDisconnected,
  onMessage,
  onGroupJoin,
  onGroupLeave,
};
