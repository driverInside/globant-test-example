const faker = require('faker')
const db = require('../db')
const UsersServices = require('../../services/users')

describe('Users Service', () => {
  beforeAll(async () => await db.connect())
  afterEach(async () => await db.clearDataBase())
  afterAll(async () => await db.closeDatabase())

  it('User Service should create an user', async () => {
    const newUser = {
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password()
    }

    const newUserCreated = await UsersServices.createUser(newUser)

    expect(newUserCreated).toBeDefined()
    expect(newUserCreated).toHaveProperty('name')
    expect(newUserCreated).toHaveProperty('lastName')

    expect(newUserCreated.name).toBe(newUser.name)
  })
})
