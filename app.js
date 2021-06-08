const express = require('express')
const app = express()

const UserService = require('./services/users')

app.use(express.json())

app.get('/', async (req, res) => {
  const users = await UserService.getUsers()
  res.send(users)
})

app.post('/', async (req, res) => {
  const body = req.body
  const user = await UserService.createUser(body)
  res.status(201)
  res.send(user)
})

module.exports = app
