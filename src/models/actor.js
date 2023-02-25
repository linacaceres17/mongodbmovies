const mongoose = require("mongoose");

const actorSchema = mongoose.Schema({

  act_id: {
    type: Number,
    required: true
  },
  act_fname: {
    type: String,
    maxlength: 20,
    required: true
  },
  act_lname: {
    type: String,
    maxlength: 20,
    required: true
  },
  act_gender: {
    type: Number,
    maxlength: 1,
    required: true
  }
});

module.exports = mongoose.model('Actor', actorSchema);