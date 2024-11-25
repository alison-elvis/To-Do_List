import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  
  const adicionarTarefa = () => {
    if (novaTarefa !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };
  const removerTarefa = (indice) => {
    setTarefas(tarefas.filter((tarefa, i) => i !== indice));
  };
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input type="text"
      value={novaTarefa}
      onChange={(e) => setNovaTarefa(e.target.value)}
      placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice}>
            {tarefa}
            <button onClick={() => removerTarefa(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;