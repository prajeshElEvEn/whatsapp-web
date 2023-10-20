const express = require("express");
const cors = require("cors");
const whatsapp = require("./src/whatsapp");
const { warn, log } = require("logggger");
const { db, loadEnv } = require("./src/utils");

const currentEnv = loadEnv();
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || "127.0.0.1";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, hostname, async () => {
  warn(`Current environment: ${currentEnv}`);
  await db();
  await whatsapp();
  log(`Server running at http://${hostname}:${port}`);
});
