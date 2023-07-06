import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
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

    if (!task) {
      return;
    }

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
      <Header />
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
