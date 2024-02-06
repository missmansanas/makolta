const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UpdateSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

const UpdateModel = model('Update', UpdateSchema);

module.exports = UpdateModel;