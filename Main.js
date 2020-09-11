const readline = require('readline')
const LanguageValidator = require('./LanguageValidator')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = ["[](){}", "[)]{}", "[(]){}<>", "(((((([]))))))", "{{[[()]()]}}", "{[[([)]]]}", "<{(())}>", "{<[]()[[]]<>>}"]

inputs.forEach(input => {
  const valid = LanguageValidator.isValid(input)
  valid ? console.log("== OK == Válido") : console.log("== Não == Inválido")
});

console.log("(== quit || CTRL + C == Para sair)")
const recursiveLoop = function () {
  rl.question("Processe mais algum input no alfabeto da linguagem <{[()]}> :", (input) => {
    const valid = LanguageValidator.isValid(input)

    valid ? console.log("== OK == Válido") : console.log("== Não == Inválido")
    
    if(input === "quit") return rl.close()
    
    recursiveLoop()
  })
}

recursiveLoop()