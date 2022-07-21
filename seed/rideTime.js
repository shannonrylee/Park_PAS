const db = require('../db')
const { Ride, Time } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRides = async () => {
  const rides = [
    {
      name: 'The Pacifier',
      category: 'Thrill',
      times_slot: ['A', 'B', 'C']
    },
    {
      name: 'Da Crib',
      category: 'Rollercoaster',
      times_slot: ['A', 'B', 'C']
    },
    {
      name: 'Ride 3',
      category: 'Ferris wheel',
      times_slot: ['A', 'B', 'C']
    },
    {
      name: 'Ride 4',
      category: 'Thrill',
      times_slot: ['A', 'B', 'C']
    },
    {
      name: 'Ride 5',
      category: 'Water ride',
      times_slot: ['A', 'B', 'C']
    }
  ]

  await Ride.insertMany(rides)
  console.log(`Rides have been added`)
}

const createTimeSlots = async () => {
  const timeSlots = [
    {
      times_slot: ['A', 'B', 'C'],
      seat: [1, 2, 3]
    },
    {
      times_slot: ['A', 'B', 'C'],
      seat: [1, 2, 3]
    },
    {
      times_slot: ['A', 'B', 'C'],
      seat: [1, 2, 3]
    },
    {
      times_slot: ['A', 'B', 'C'],
      seat: [1, 2, 3]
    },
    {
      times_slot: ['A', 'B', 'C'],
      seat: [1, 2, 3]
    }
  ]

  await Time.insertMany(timeSlots)
  console.log(`TimeSlots have been added`)
}

const run = async () => {
  const rides = await createRides()
  await createTimeSlots()
  db.close()
}
run()
