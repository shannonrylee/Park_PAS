const express = require('express')
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', routes)

app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

db.on(
  'error',
  console.error.bind(console, 'Park PAS MongoDB connection error:')
)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
