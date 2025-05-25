const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  adopted: Boolean
});

module.exports = mongoose.model('Pet', PetSchema);
