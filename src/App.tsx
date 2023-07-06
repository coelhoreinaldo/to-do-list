import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  position:fixed;
  top: 0;
  display: flex;
  flex-direction: column;
`;

interface Task {
  id: number;
  name: string;
}

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      id: newId,
      name: task,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  return (
    <Main>
      <Header>
        <h1>To do list</h1>
        <h2>Clique duas vezes em um item para marcá-lo como completo.</h2>
      </Header>
      <form onSubmit={ handleSubmit }>
        <label>
          <input
            type="text"
            placeholder="Digite uma tarefa..."
            onChange={ handleChange }
            value={ task }
          />
        </label>
        <ol>
          {tasks.map((item) => <li key={ item.id }>{item.name}</li>)}
        </ol>
        <button type="submit">Adicionar</button>
      </form>

    </Main>
  );
}

export default App;
