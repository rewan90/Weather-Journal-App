const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(express.json());

app.use(cors());
app.use(express.static("public"));
let projectData = {};

// GET route to return projectData
app.get("/api/projectData", (req, res) => {
  res.json(projectData);
});

// POST route to add data to projectData
app.post("/api/projectData", (req, res) => {
  const { temperature, date, feelings } = req.body;
  projectData = { ...projectData, temperature, date, feelings };
  res.json(projectData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
