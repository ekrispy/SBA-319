const express = require("express");
const app = express();

const mongoose = require('mongoose');

// import mongoose from ('mongoose');

require("dotenv").config();
const restaurants = require("./routes/restaurants.js");
const reviews = require("./routes/reviews.js");
const HappyHour = require("./routes/HappyHourMenu.js");

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send(
    "Welcome! If you want to access any of the routes, please use the URL: /users, /meals, or /comments"
  );
});

app.use("/api/restaurants", restaurants);
app.use("/api/reviews", reviews);
app.use("/api/happyhour", HappyHour);

// Connect to DB with error handling
mongoose.connect(process.env.Atlas_URI)
 .then(() => {
    // Listen for requests
    const port = process.env.PORT || 3000; // default port if env var is not set
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
 .catch((error) => {
    console.error(`Error connecting to DB: ${error.message}`); // log error with message
    process.exit(1); // exit with error code if DB connection fails
  });
// app.listen(process.env.PORT, () => {
//   console.log("Server started on port 4000");
// });

