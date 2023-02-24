const express = require("express");
const reviewerSchema = require ("../models/reviewer");

const router = express.Router();

//Create reviewer
router.post("/reviewers", (req, res) => {
    const reviewer= reviewerSchema(req.body);
    reviewer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// Get all reviewers
router.get("/reviewers", (req, res) => {
    reviewerSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error}));
});

// Delete a reviewer
router.delete("/reviewers/:id", (req, res) => {
    const { id } = req.params;
    reviewerSchema
      .remove({ rev_id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


module.exports = router;