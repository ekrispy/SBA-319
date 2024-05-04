const express = require('express');
const app = express();
const port = 3000;
const env = require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Welcome! If you want to access any of the routes, please use the URL: /users, /meals, or /comments');
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
