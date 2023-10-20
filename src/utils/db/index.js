const { success, error } = require("logggger");
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    success(`Connected to Databse: ${conn.connection.host}`);
  } catch (err) {
    error(`Error connecting to Database: ${err.message}`);
    process.exit(1);
  }
};

module.exports = {
  connectToDB,
};
