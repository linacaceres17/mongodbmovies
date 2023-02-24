const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  mov_id: {
    type: Number,
    required: true
  },
  mov_title: {
    type: String,
    maxlength: 50,
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
    maxlength: 50,
    required: true
  },

  mov_rel_country: {
    type: String,
    maxlength: 5,
    required: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);