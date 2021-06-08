class Foo {
  constructor (fooType = null) {
    this.fooType = null
  }

  sum (a = 0, b = 0) {
    return a + b
  }

  hello (msg) {
    console.log(msg)
  }
}

module.exports = new Foo()
