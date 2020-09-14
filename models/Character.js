const mongoose = require("../db/connection")
const {
    Skills,
    skillSchema
} = require('./Skills')

const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bio: String,
    skills: [skillSchema],
    animeName: String,
    url: String,
    image: String
    favorited: Boolean,
    likes: Number,
    dislikes: Number
})

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character