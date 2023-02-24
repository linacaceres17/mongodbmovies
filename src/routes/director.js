const express = require("express");
const directorSchema = require("../models/director");


const router = express.Router();

// create director
router.post("/director", (req, res) => {
    const reviewer= directorSchema(req.body);
    reviewer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router;