const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello World! The super secret API key is: ${process.env.API_KEY}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
