## Deps

```bash
npm i whatsapp-web.js qrcode-terminal logggger
```

## package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node .",
    "dev": "nodemon ."
  }

```

## .gitignore

```.gitignore
# dirs
node_modules

# files
package-lock.json
.wwebjs_auth
.wwebjs_cache
```

## example

```javascipt
const { success } = require("logggger");
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  success("Client is ready!");
});

client.on("message", (message) => {
  if (message.body === "!ping") {
    client.sendMessage(message.from, "pong");
  }
});

client.initialize();
```
