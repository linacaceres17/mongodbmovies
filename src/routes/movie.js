const express = require("express");
const movie = require("../models/movie");
const movieSchema = require("../models/movie");
const router = express.Router();

// create movies
router.post('/movies', (req, res) => {
  const movie = movieSchema(req.body);
  movie
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all movies
router.get('/movies', (req, res) => {
  movie
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
});

// get a movie
router.get('/movie/:id', (req, res) => {
  const { id } = req.params;
  movie
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }))
});

//  Update a movie
router.put('/movie/:id', (req, res) => {
  const { id } = req.params;
  const { movie_id, mov_title, mov_year, mov_time, mov_lang, mov_rel_country } = req.body;
  movieSchema
  .updateOne ({ _id: id }, { $set: {movie_id, mov_title, mov_year, mov_time, mov_lang, mov_rel_country} })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }))
});

//delete a movie
router.delete('/movie/:id', (req, res) => {
  const { id } = req.params;
  movieSchema
  .remove({ _id: id})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }))
});


module.exports = router;