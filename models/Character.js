const mongoose = require("../db/connection")
const {
    Skills,
    skillSchema
} = require('./Skills')

const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    skills: [skillSchema],
    animeName: String,
    url: String,
    favorited: Boolean
})

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character