class Stack {
  constructor() {
    this.data = []
    this.top = 0
  }

  push(elem) {
    this.data.push(elem)
    this.top++
  }

  pop() {
    if (this.data.length !== 0) {
      this.top--
      return this.data.pop()
    }
  }
}

module.exports = Stack