const { Schema } = require('mongoose')

const Ride = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    times_slot: { type: Array, required: true }
  },
  { timestamps: true }
)
module.exports = Ride
