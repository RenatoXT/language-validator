class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(elem) {
    const node = new Node(elem)
    node.next = this.top 
    this.top = node
  }

  pop() {
    if (this.top) {
      const value = this.top.value
      this.top = this.top.next
      return value
    }
  }
}

module.exports = Stack