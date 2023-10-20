const { Client, LocalAuth, RemoteAuth } = require("whatsapp-web.js");
const store = require("../store");

// const client = new Client({
//   authStrategy: new LocalAuth(),
//   puppeteer: {
//     headless: true,
//   },
// });

const client = new Client({
  authStrategy: new RemoteAuth({
    store: store,
    backupSyncIntervalMs: 300000,
  }),
});

module.exports = client;
