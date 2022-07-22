const Rides = require('../models/rides')
const TimeSlots = require('../models/timeslots')
const { Ride, Time } = require('../models')

const getRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTimeSlots = async (req, res) => {
  try {
    const times = await Time.find()
    return res.status(200).json({ times })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createRide = async (req, res) => {
  try {
    const newRide = await new Ride(req.body)
    await newRide.save()
    return res.status(201).json({
      newRide
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createTimeSlot = async (req, res) => {
  try {
    const newTime = await new Time(req.body)
    await newTime.save()
    return res.status(201).json({
      newTime
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getRides,
  getTimeSlots,
  createRide,
  createTimeSlot
}
