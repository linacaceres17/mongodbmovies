const express = require("express");
const moviegenres = require("../models/moviegenres");
const moviegenresSchema = require("../models/moviegenres");
const router = express.Router();

//create moviegenres
router.post('/moviegenres', (req, res) => {
    const moviegenres = moviegenresSchema(req.body);
    moviegenres
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Get all moviegenres
router.get('/moviegenres', (req, res) => {
    moviegenres
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get a moviegenres
router.get('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    moviegenres
    .findOne( { gen_id : id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

//  Update a moviegenres
router.put('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    const { gen_id, mov_id } = req.body;
    moviegenresSchema
    .updateOne ({ gen_id: id }, { $set: { gen_id, mov_id } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Delet a moviegenres
router.delete('/moviegenres/:id', (req, res) => {
    const { id } = req.params;
    moviegenresSchema
    .remove({ gen_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});




module.exports = router;