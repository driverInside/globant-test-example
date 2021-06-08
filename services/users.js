const UsersModel = require('../models/users')

const createUser = ({ name, lastName, password }) => {
  const newUser = new UsersModel({
    name,
    lastName,
    password
  })

  return newUser.save()
}

const getUsers = async () => {
  return await UsersModel.find({})
}

module.exports = {
  createUser,
  getUsers
}
