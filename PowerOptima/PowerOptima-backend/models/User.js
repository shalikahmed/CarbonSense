const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  aadharNumber: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User