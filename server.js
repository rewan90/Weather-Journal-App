const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

const projectData = {};

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/all', (req, res) => {
  res.json(projectData);
});

app.post('/add', (req, res) => {
  const newData = req.body;
  projectData.date = newData.date;
  
  projectData.temp = newData.temp;

  res.json(projectData);
});
