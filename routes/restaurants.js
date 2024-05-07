const express = require("express");
const{createRestaurant, getAllRestaurants, getSingleRestaurant, deleteRestaurant, updateRestaurant} = require('../Controllers/restaurantController.js')
const router = express.Router();
// const restaurants = require('../Db/restaurants.js');
const Restaurants = require("../models/restaurants.js");


// Get all restaurants
router.get("/", getAllRestaurants);

// Get a single restaurant
router.get("/:id", getSingleRestaurant);

// Create a new restaurant
router.post("/", createRestaurant);

// Create a new restaurant
router.get("/seed", async (req, res) => {
  try {
    await Restaurants.deleteMany({});
    const newRestaurant = await Restaurants.insertMany(restaurants);
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a restaurant
router.delete("/:id", deleteRestaurant);

// Update a restaurant
router.patch("/:id", updateRestaurant);

module.exports = router;
