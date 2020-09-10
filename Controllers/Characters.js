const express = require("express")
const router = express.Router()
const Character = require("../models/Character")

router.get("/", (req, res) => {
    Character.find({}).then(allCharacters => res.json(allCharacters))
});

router.get("/:name", (req, res) => {
    Character
        .find({
            name: req.params.title
        })
        .then(Characters => res.json(Characters))
});

router.post("/", (req, res) => {
    Character.create(req.body)
        .then(Character => res.json(Character))
});

router.put("/:name", (req, res) => {
    Character.findOneAndUpdate({
        name: req.params.title
    }, req.body, {
        new: true
    }).then(Character => res.json(Character))
});

router.delete("/:name", (req, res) => {
    Character.findOneAndDelete({
        name: req.params.title
    }).then(Character => {
        res.json(Character)
    });
});

module.exports = router