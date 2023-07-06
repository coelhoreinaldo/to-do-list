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

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ListItem = styled.li<{ completed: boolean, isSelected: boolean }>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  background-color: ${(props) => (props.isSelected ? 'aquamarine' : 'transparent')};

`;

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTasks = tasks.map((item) => (
      item.id === +event.target.id ? { ...item, completed: !item.completed } : item
    ));
    setTasks(updatedTasks);
  };

  const handleSelected = (id:number) => {
    setSelectedId(id);
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
        <List>
          {tasks.map((item) => (
            <ListItem
              key={ item.id }
              completed={ item.completed }
              isSelected={ selectedId === item.id }
              onClick={ () => handleSelected(item.id) }
            >
              <input
                type="checkbox"
                id={ `${item.id}` }
                onChange={ handleUpdate }
              />
              <label>{item.name}</label>
            </ListItem>
          ))}
        </List>
        <button type="submit">Adicionar</button>
      </form>

    </Main>
  );
}

export default App;
