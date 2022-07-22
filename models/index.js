const { model } = require('mongoose')
const TimeSchema = require('./timeslots')
const RideSchema = require('./rides')

const Ride = model('Ride', RideSchema)
const Time = model('Time', TimeSchema)

module.exports = {
    Ride,
    Time
}
