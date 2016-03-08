'use strict'

class Dictionary {
  constructor () {
    this.data = []
  }

  add (index, value) {
    this.data[index] = value
  }

  find (index) {
    return this.data[index]
  }

  remove (index) {
    delete this.data[index]
  }

  showAll () {
    Object
      .keys(this.data)
      .forEach(key => console.log(key, this.data[key]))
  }
}

