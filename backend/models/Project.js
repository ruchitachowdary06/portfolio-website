const Project = require("./models/Project");
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String]
});

module.exports = mongoose.model("Project", projectSchema);
