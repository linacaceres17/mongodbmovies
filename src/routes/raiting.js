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

// Get all genres
router.get("/ratings", (req, res) => {
    ratingSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


module.exports = router;