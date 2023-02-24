const express = require("express");
const movieSchema = require("../models/movie");
const router = express.Router();

// create user
router.post('/movies', (req, res) => {
  const user = movieSchema(req.body);
  user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;