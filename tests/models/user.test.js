const faker = require('faker')
const UsersModel = require('../../models/users')
const db = require('../db')

describe('Users Model', () => {
  beforeAll(async () => await db.connect())
  afterEach(async () => await db.clearDataBase())
  afterAll(async () => await db.closeDatabase())

  it('Create an user', async () => {
    const newUser = new UsersModel({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password()
    })

    await newUser.save()
    const user = await UsersModel.findOne({ _id: newUser._id })

    expect(user).toBeDefined()
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('lastName')

    expect(user.name).toBe(newUser.name)
    expect(user.lastName).toBe(newUser.lastName)
  })

  it('Password validation should throw an error', async () => {
    const newUser = new UsersModel({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: '1'
    })

    await expect(newUser.save()).rejects.toThrow()
  })
})
