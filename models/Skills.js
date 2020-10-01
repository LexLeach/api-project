const mongoose = require("../db/connection");

const skillSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Skills = mongoose.model("Skill", skillSchema);

module.exports = { Skills, skillSchema };
