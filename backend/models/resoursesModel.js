const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const Resourses = mongoose.model("Resourses", courseSchema);

module.exports = Resourses;
