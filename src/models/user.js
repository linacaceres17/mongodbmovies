const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  mov_id: {
    type: Number,
    required: true
  },
  mov_title: {
    type: String,
    required: true
  },
  mov_year: {
    type: Number,
    required: true
  },
  mov_time: {
    type: Number,
    required: true
  },
  mov_lang: {
    type: String,
    required: true
  },
  mov_rel_country: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);