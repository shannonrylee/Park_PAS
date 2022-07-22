const { Schema } = require('mongoose')

const TimeSlots = new Schema(
  {
    times_slot: { type: Array, required: true },
    seat: { type: Array, required: true }
  },
  { timestamp: true }
)
module.exports = TimeSlots
