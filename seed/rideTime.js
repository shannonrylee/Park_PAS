const db = require('../db')
const { Ride, Time } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createRides = async () => {
  const rides = [
    {
      name: 'The Pacifier',
      category: 'Thrill',
      times_slot: '2:00PM',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6z93BMwTLKz-et21NAvWgAHaD4%26pid%3DApi&f=1'
    },
    {
      name: 'Da Crib',
      category: 'Rollercoaster',
      times_slot: '10:00AM',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BEK6uvpAt1J0EDcjGYK_QgHaEK%26pid%3DApi&f=1'
    },
    {
      name: 'Baby Bottle',
      category: 'Ferris wheel',
      times_slot: '4:00PM',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TvhBUzZKCknVB-__ELLCqgHaEK%26pid%3DApi&f=1'
    },
    {
      name: 'The Rocker',
      category: 'Thrill',
      times_slot: '12:00PM',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.H9b8Mr__7s4X0RZF83a2JQHaFi%26pid%3DApi&f=1'
    },
    {
      name: 'Drool',
      category: 'Water ride',
      times_slot: '3:00PM',
      image:
        'https://media2.orlandoweekly.com/orlando/imager/u/blog/29628670/screen_shot_2021-07-13_at_1.13.09_pm.png?cb=1643759005'
    },
    {
      name: 'Cave of Blues',
      category: 'Dark ride',
      times_slot: '9:00AM',
      image:
        'https://www.electrosonic.com/hs-fs/hubfs/The%20Past,%20Present%20and%20Future%20of%20the%20Dark%20Ride/ELC125_N6_1200x629.png?width=1200&name=ELC125_N6_1200x629.png'
    },
    {
      name: 'Wacky Shack',
      category: 'Funhouse',
      times_slot: '11:00AM',
      image:
        'https://carnivalwarehouse.com/media/imagepack/news/D9111C54-B5F7-468F-B91B-31E6015A43FF.jpg'
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
  await createRides()
  await createTimeSlots()
  db.close()
}
run()
