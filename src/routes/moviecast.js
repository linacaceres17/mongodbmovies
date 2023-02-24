const express = require("express");
const moviecast = require("../models/moviecast");
const moviecastSchema = require("../models/moviecast");
const router = express.Router();

//create moviecast
router.post('/moviecast', (req, res) => {
    const moviecast = moviecastSchema(req.body);
    moviecast
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Get all moviecast
router.get('/moviecast', (req, res) => {
    moviecast
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get a moviecast
router.get('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    moviecast
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

//  Update a moviecast
router.put('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    const { act_id, mov_id, role } = req.body;
    moviecastSchema
    .updateOne ({ _id: id }, { $set: { act_id, mov_id, role } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Delete a moviecast
router.delete('/moviecast/:id', (req, res) => {
    const { id } = req.params;
    moviecastSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});




module.exports = router;