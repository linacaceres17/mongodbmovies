const express = require("express");
const ratingSchema = require ("../models/raiting");

const router = express.Router();

// Create a new rating

router.post("/ratings", (req,res) => {
    const rating= ratingSchema(req.body);
    rating
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// Get all ratings

router.get("/ratings", (req, res) => {
    ratingSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// udate a rating

router.put("/raiting/:id", (req, res) => {
    const { id } = req.params;
    const { rev_id, mov_id, rev_stars, num_o_ratings } = req.body;
    ratingSchema
      .updateOne({ rev_id: id }, 
        { $set: { rev_id, mov_id, rev_stars, num_o_ratings }})
      .then((data) => res.json(data))
      .catch((error) => res.json({message:error}));
  });

  //delete a raiting
  
  router.delete("/raiting/:id", (req, res) => {
    const { id } = req.params;
    ratingSchema
      .remove({ rev_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;