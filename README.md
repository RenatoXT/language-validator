# Language Validator

This project just solve the `Balanced Parentheses Problem` considering the language **`<{[()]}>`**. That was proposed by [Daniel Carvalho](https://github.com/danielscarvalho) in the compilers subject at *FTT*.

## Running the project :scroll:

  - I ran this program using node `v12.16.2` but since I did not use any specific feature possibly this should not be a requirement. (Just remember that ES6 features was introduced in node environment `v4.3.2`)
  - In root project folder just execute ***`node src`***

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

