const mongoose = require("mongoose");
const { MongoStore } = require("wwebjs-mongo");

const store = new MongoStore({ mongoose: mongoose });

module.exports = store;
