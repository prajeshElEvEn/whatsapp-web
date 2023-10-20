const utils = module.exports;
const { connectToDB } = require("./db");

utils.loadEnv = require("./env");
utils.db = connectToDB;
