const { Schema } = require('mongoose')

const TimeSlots = new Schema(
    {
        seat: { type: String, required: true}
    },
    { timestamp: true}
)
module.exports = TimeSlots

