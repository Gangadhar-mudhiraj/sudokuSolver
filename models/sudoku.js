const mongoose = require("mongoose");
const { Schema } = mongoose;

const sudokuSchema = new Schema({
  answer: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Answer", sudokuSchema);