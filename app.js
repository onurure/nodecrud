const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

app.get('/', (req, res) => res.send('hello'))

mongoose.connect(process.env.MONGO, {useNewUrlParser:true}).then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.listen(3000, () => {
  console.log('listen')
})