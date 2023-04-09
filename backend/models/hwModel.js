const mongoose = require("mongoose");

const HWSchema = mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const homework = mongoose.model("homeworks", HWSchema);

module.exports = homework;
