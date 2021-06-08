const faker = require('faker')
const request = require('supertest')
const app = require('../../app')

const db = require('../db')

describe('Users API', () => {
  beforeAll(async () => await db.connect())
  afterEach(async () => await db.clearDataBase())
  afterAll(async () => await db.closeDatabase())

  it('Should create a new user', async () => {
    const newUser = {
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password()
    }

    const response = await request(app).post('/').send(newUser)
    const user = response.body

    expect(response.statusCode).toBe(201)

    expect(user).toBeDefined()

    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('lastName')
  })
})
