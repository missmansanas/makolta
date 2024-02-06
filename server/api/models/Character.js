const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CharacterSchema = new Schema({
  alias: {
    type: String,
    required: true,
    min: 3,
    unique: true
  },
  name: {
    type: String,
    required: false,
    min: 4
  },
  avatar: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String,
  }
})

const CharacterModel = model('Character', CharacterSchema);

module.exports = CharacterModel;