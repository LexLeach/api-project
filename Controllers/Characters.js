const express = require("express")
const router = express.Router()
const Character = require("./models/Character")

router.get("/", (req, res) => {
    Character.find({}).then(allCharacters => res.json(allCharacters))
});

router.get("/:title", (req, res) => {
    Character
        .find({
            title: req.params.title
        })
        .then(Characters => res.json(Characters))
});

router.post("/", (req, res) => {
    Character.create(req.body)
        .then(Character => res.json(Character))
});

router.put("/:title", (req, res) => {
    Character.findOneAndUpdate({
        title: req.params.title
    }, req.body, {
        new: true
    }).then(Character => res.json(Character))
});

router.delete("/:title", (req, res) => {
    Character.findOneAndDelete({
        title: req.params.title
    }).then(Character => {
        res.json(Character)
    });
});

module.exports = router