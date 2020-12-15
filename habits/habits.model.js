const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require('moment');

function daysToCompleteExample(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    let day = { date: moment().add(i, 'days').toISOString().slice(0,10) , done: null}
    array.push(day);
  }
  return array;
}

const habitSchema = new Schema(
  {
    name: { type: String, required: true },
    points: { type: Number, required: true },
    daysToComplete: {
      type: Array, default: daysToCompleteExample(10)
    },
    childId: { type: mongoose.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

exports.HabitModel = mongoose.model("Habit", habitSchema);
