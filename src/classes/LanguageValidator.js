const Stack = require('./Stack')

class LanguageValidator {
  static isValid(input){
    try {
      const stack = new Stack()

      const isValidInput = input.match(/[\{\}\[\]\<>()]+/)

      if(!isValidInput || input.length == 1) return false

      input = input.replace(/\s/g, '');
      console.log(`Input processada: ${input}`)
  
      const actions = {
        "[" : () => stack.push("["),
        "{" : () => stack.push("{"),
        "<" : () => stack.push("<"),
        "(" : () => stack.push("(")
      }
  
      const pairs = {
        "]" : "[",
        "}" : "{",
        ">" : "<",
        ")" : "("
      }
  
      const tryPop = (char) => {
        const top = stack.pop()
        
        // if value of pair is different to last element of the stack
        // AND theres still elements in the stack return error
        // OR if stack is empty return error either
        if ( pairs[char] !== top && top || !top ) throw new Error()
      } 
  
      for(let i=0; i< input.length; i++){
        const char = input[i]
        const action = actions[char]
  
        typeof action === "function" ? action() : tryPop(char)
      }

      return true
    }
    catch(e){
      return false
    }
  }
}

module.exports = LanguageValidator