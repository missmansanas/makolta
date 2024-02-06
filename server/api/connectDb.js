const mongoose = require('mongoose');
require('dotenv').config('../.env')

let isConnected = false;

const connectDatabase = async () => {
  if (isConnected) {
    console.log('Already connected to database');
    return;
  }

  try {
    await mongoose.connect(`mongodb+srv://paolanocom:${process.env.MONGO_PW}@cluster0.ufeyccl.mongodb.net/portal?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
    });
    console.log('Successfully connected to db');
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

module.exports = { connectDatabase }