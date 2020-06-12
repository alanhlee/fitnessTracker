const { Schema, model } = require("mongoose");

module.exports = model(
  "Workout",
  new Schema({
    exercises: Array,
    
  })
);
