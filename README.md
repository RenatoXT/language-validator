# Language Validator

This project just solve the `Balanced Parentheses Problem` considering the language **`<{[()]}>`**. That was proposed by [Daniel Carvalho](https://github.com/danielscarvalho) in the compilers subject at *FTT*.

## Running the project :scroll:

  - Nodejs version: `v12.16.2`
  - In root project folder just run ***`node src`***

The expected output in your stdout is :

                Input processada: [](){}
                == OK == Válido
                Input processada: [)]{}
                == Não == Inválido
                Input processada: [(]){}<>
                == Não == Inválido
                Input processada: (((((([]))))))
                == OK == Válido
                Input processada: {{[[()]()]}}
                == OK == Válido
                Input processada: {[[([)]]]}
                == Não == Inválido
                Input processada: <{(())}>
                == OK == Válido
                Input processada: {<[]()[[]]<>>}
                == OK == Válido
                (== quit || CTRL + C == Para sair)
                Processe mais algum input no alfabeto da linguagem <{[()]}> :

- You can interact with the program via stdin and keep testing or type `quit` or `CTRL+C` to exit. 

