const db = require('../db')
const Ride = require('.rides')
const TimeSlot = require('..timeslots')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () = {
    const rides = [ 
        name: { type: String, required: true},
        category: {type: String, required: true},
        times_slot: { type: String, required: true}
    ]
    const timeslots = [
        seat: { type: String, required: true}
    ]
}

const run = async () => {
  await main()
  db.close()
}
run()
