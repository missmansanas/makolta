const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ElementSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  cover: {
    type: String
  }
});

const ElementModel = model('Element', ElementSchema)

module.exports = ElementModel;