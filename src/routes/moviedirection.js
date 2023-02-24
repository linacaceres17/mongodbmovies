const express = require("express");
const moviedirectionSchema = require("../models/moviedirection");


const router = express.Router();

// create movie director
router.post("/moviedirection", (req,res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

module.exports = router;