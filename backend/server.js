const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.get("/", (req, res) => {
  res.send("Server is working ✅");
});
app.use(cors());
app.use(express.json());

// 👉 Paste your MongoDB URL here
mongoose.connect("mongodb+srv://ruchitachowdary06_db_user:dcSyabZjDBehq5ux@cluster0.mxyizsv.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

const Project = mongoose.model("Project", {
  title: String,
  description: String,
  techStack: [String]
});

// 👉 Add project (no tool needed)
app.get("/add", async (req, res) => {
  const p = new Project({
    title: "Portfolio Website",
    description: "Full stack project",
    techStack: ["HTML", "CSS", "Node"]
  });

  await p.save();
  res.send("Added ✅");
});

// 👉 Get projects
app.get("/projects", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

app.listen(3000, () => console.log("Server running on 3000 🚀"));