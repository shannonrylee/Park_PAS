const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Park PAS root!'))

router.get('/rides', controllers.getRides)

router.get('/timeslots', controllers.getTimeSlots)

router.post('/create-ride', controllers.createRide)

router.post('/create-timeslot', controllers.createTimeSlot)

module.exports = router
