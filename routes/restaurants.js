const express = require("express");
const router = express.Router();
// const restaurants = require('../Db/restaurants.js');
const Restaurants = require("../models/restaurants.js");
// Get all restaurants
router.get("/", (req, res) => {
  // await Restaurants.find({});
  res.json({ message: "Get all restaurants" });
});

// Get a single restaurant
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single restaurant" });
});

// Create a new restaurant
router.post("/", async (req, res) => {
  const { id, name, address, cuisine, description } = req.body;
  try {
    const newRestaurant = await Restaurants.create({
      id,
      name,
      address,
      cuisine,
      description,
    });
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a restaurant" });
});

// Update a restaurant
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a restaurant" });
});

module.exports = router;
