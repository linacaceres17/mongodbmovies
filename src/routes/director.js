const express = require("express");
const directorSchema = require("../models/director");


const router = express.Router();

// Create director

router.post("/director", (req, res) => {
    const reviewer= directorSchema(req.body);
    reviewer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

// Get all directors

router.get("/director", (req, res) => {
    directorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Udate a director

router.put("/director/:id", (req, res) => {
    const { id } = req.params;
    const { dir_id, dir_fname, dir_lname } = req.body;
    directorSchema
    .updateOne({ dir_id: id}, { $set: { dir_id, dir_fname, dir_lname }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
  });
  
  // Delete a director

  router.delete("/director/:id", (req, res) => {
    const { id } = req.params;
    directorSchema
    .deleteOne({ dir_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
  });
module.exports = router;