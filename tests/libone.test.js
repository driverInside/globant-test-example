const fooObj = require('../lib/libone')

describe('awesome foo library', () => {
  describe('basic features', () => {
    it('The hello method should be defined', () => {
      expect(fooObj).toBeDefined()
      expect(fooObj.hello).toBeDefined()
    })

    it('Hello should print a message', () => {
      const message = 'Hola mundo'
      // mocking
      console.log = jest.fn()
      fooObj.hello(message)
      expect(console.log.mock.calls[0][0]).toBe(message)
    })
  })
})
