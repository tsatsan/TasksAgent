const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const moment = require('moment')

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

require('dotenv').load()

const dbUrl = process.env.DB_URI
const PORT = process.env.PORT

const app = express()

mongoose.Promise = Promise
mongoose.connect(dbUrl)

app.use(express.static(path.join(__dirname + '/..', 'public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
