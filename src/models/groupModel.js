const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    subject: {
      type: String,
    },
    desc: {
      type: String,
    },
    participants: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
