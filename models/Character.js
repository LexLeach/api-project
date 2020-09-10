const mongoose = require("../db/connection")

const CharacterSchema = new mongoose.Schema({
    name: String,
    animeName: String,
    url: String,
    favorited: Boolean,
    age: Number,
    specialSkills: String
})

const Character = mongoose.model("Character", CharacterSchema);

//export the instantiated model. Think of this like creating a new class
module.exports = Character