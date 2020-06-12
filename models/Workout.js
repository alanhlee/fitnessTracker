const { Schema, model } = require("mongoose");

let workoutSchema = new Schema({
    exercises: [ {
      type: {
        type: String
      },
      duration: {
        type: Number,
        default: 0
      },
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: 
      {
        type: Number,
        default: 0
      }
    }
  ],
    day: {
      type: Date,
      default: new Date(Date.now() - 60 * 60 * 7000)
    }
  },
      {
        toJSON : {virtuals : true}
      
      }
    )
    workoutSchema.virtual("totalDuration").get(function () {
        return this.exercises.reduce((acc, item) => {
          return acc + item.duration
        }, 0)
      })

module.exports = model(
  "Workout", workoutSchema
)
