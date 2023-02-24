const mongoose = require("mongoose");

const moviecastSchema = mongoose.Schema({

  act_id: {
    type: Number,
    required: true
  },
  mov_id: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    maxlength: 30,
    required: true
  }
});

module.exports = mongoose.model('Moviecast', moviecastSchema);