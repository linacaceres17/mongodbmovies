const express = require("express");
const moviedirection = require("../models/moviedirection");
const moviedirectionSchema = require("../models/moviedirection");

const router = express.Router();

// Create movie director

router.post("/moviedirection", (req,res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// Get all

router.get("/moviedirection", (req, res) => {
    movieDirectionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a movie direction by id

router.get('/moviedirection/:id', (req, res) => {
    const { id } = req.params;
    moviegenres
    .findOne( { dir_id : id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Update by dir_id

router.put("/moviedirection/:id", (req, res) => {
    const { id } = req.params;
    const { dir_id, mov_id } = req.body;
    movieDirectionSchema
    .updateOne({ dir_id: id }, { $set: { dir_id, mov_id }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });
  
  // Delete by dir_id

  router.delete("/moviedirection/:id", (req, res) => {
    const { id } = req.params;
    movieDirectionSchema
    .deleteOne({ dir_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });

module.exports = router;