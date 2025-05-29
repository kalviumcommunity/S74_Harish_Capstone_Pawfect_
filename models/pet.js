const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  adopted: {
    type: Boolean,
    default: false
  },
  imageUrl: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
    owner: {
       type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
       }
});
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});



const Pet = mongoose.model('Pet', PetSchema);
const User = mongoose.model('User',userSchema);



module.exports = Pet;


