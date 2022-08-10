const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  AlgoName: {
    type: String,
    required: true,
  },
  function: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Algoritihms", signUpTemplate);
