const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const bluebird   = require('bluebird')
const cors       = require('cors')

const app = express()

app.use(cors())
mongoose.connect('mongodb://localhost/myunlv', { useMongoClient: true })
mongoose.Promise = bluebird

const User_schema = mongoose.Schema({
  first_name: String, last_name: String, nshe_id: Number, password: String
})
const User_model = mongoose.model('User', User_schema)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.json({api: 'Welcome to API'}))

app.get('/user/:nshe_id', (req, res) => User_model
  .findOne({nshe_id: req.params.nshe_id})

  .then(result => res.json(result))

  .catch(console.log)
)

app.post('/user', (req, res) => {
  const new_user = new User_model({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    nshe_id: req.body.nshe_id,
    password: req.body.password
  })

  return new_user.save()
    .then(result => res.json(result))

    .catch(console.log)
})

app.post('/login', (req, res) => User_model
  .findOne({nshe_id: req.body.nshe_id, password: req.body.password})

  .then(user => {
    if (user)
      res.json(user)
    else
      res.status(401).json({message: 'nshe_id and password are not matched'})
  })
)

app.listen(3030, () => {
  console.log('Server is listening to port: 3030')
})
