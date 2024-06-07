const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  relationshipType: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: false
  },
  surname: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['living', 'deceased'] // Define the possible status values
  },
  birthYear:{
    type: Number,
    required:true
  },
  birthMonth: {
    type: String,
    enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    required: true
  },
  birthDay: {
    type: String,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    required: true
  },
  birthPlace: {
    type: String,
    required: true
  },
  currentPlace: {
    type: String,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
