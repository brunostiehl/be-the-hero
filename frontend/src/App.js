import React, { useState } from 'react';

import Header from './Header'

/**
 * React - conceitos
 * 
 * Componente: é uma função que retorna HTML.
 * JSX (Javascript XML): é quando o HTML está integrado dentro do javascript.
 * Propriedades: possuem a mesma sintaxe dos atributos HTML (ex.: id="title"), no entanto, são passadas para os componentes ao invés de elementos do HTML.
 * Estado: toda vez que o componente precisar armazenar uma informação dentro dele, deve ser criado um estado, para que seja possível atualizar essa informação e para que ela seja refletida na interface.
 * Imutabilidade: dentro do React, por uma questão de performance, a variável de estado nunca deve ser manipulada diretamente. É necessário sobrepor o valor da variável de estado utilizando o método useState().
 */

function App() {
  // useState() retorna um array com duas posições: Array [valor, função_de_atualização]
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
