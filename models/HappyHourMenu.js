const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newHappyHourMenu = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    happyHourMenu: [
      {
        name: String,
        price: Number,
      },
      {
        name: String,
        price: Number,
      },
      {
        name: String,
        price: Number,
      },
    ],
    happyHourHours: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HappyHourMenu", newHappyHourMenu);
