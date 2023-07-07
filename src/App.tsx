import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { Button, Div, Form, Input, List, ListItem, Main } from './App';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [idToEdit, setIdToEdit] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleUpdateSelected = (currTask: Task) => {
    setIdToEdit(currTask.id);
    const taskToBeUpdated = tasks.find((item) => item.id === currTask.id);
    if (taskToBeUpdated) {
      setTask(taskToBeUpdated.name);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    if (idToEdit) {
      const updatedTasks = tasks
        .map((item) => (item.id === idToEdit ? { ...item, name: task } : item));
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setIdToEdit(null);
      return setTask('');
    }

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      id: newId,
      name: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
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

  const handleDeleteAll = () => {
    setTasks([]);
    setSelectedId(null);
    localStorage.setItem('tasks', JSON.stringify([]));
  };

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter((item) => !item.completed);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setSelectedId(null);
  };

  const handleMoveUp = () => {
    const selectedTask = tasks.find((item) => item.id === selectedId);
    if (selectedTask) {
      const selectedTaskIndex = tasks.indexOf(selectedTask);
      if (selectedTaskIndex > 0) {
        const updatedTasks = [...tasks];
        const newIndex = selectedTaskIndex - 1;
        updatedTasks.splice(selectedTaskIndex, 1);
        updatedTasks.splice(newIndex, 0, selectedTask);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
    }
  };

  const handleMoveDown = () => {
    const selectedTask = tasks.find((item) => item.id === selectedId);
    if (selectedTask) {
      const selectedTaskIndex = tasks.indexOf(selectedTask);
      if (selectedTaskIndex < tasks.length - 1) {
        const updatedTasks = [...tasks];
        const newIndex = selectedTaskIndex + 1;
        updatedTasks.splice(selectedTaskIndex, 1);
        updatedTasks.splice(newIndex, 0, selectedTask);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
    }
  };

  const handleDeleteSelected = (currTask:Task) => {
    const updatedTasks = tasks.filter((item) => item !== currTask);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storageTasks);
  }, []);

  return (
    <Main>
      <Header />
      <Form onSubmit={ handleSubmit } onReset={ handleDeleteAll }>
        <Div>
          <Input
            type="text"
            placeholder="Digite uma tarefa..."
            onChange={ handleChange }
            value={ task }
          />
          <Button $color="green" type="submit">
            {!idToEdit
              ? 'Adicionar' : 'Editar'}

          </Button>
        </Div>
        <List>
          {tasks.map((item) => (
            <ListItem
              key={ item.id }
              $completed={ item.completed }
              $isSelected={ selectedId === item.id }
              onClick={ () => handleSelected(item.id) }
            >
              <input
                type="checkbox"
                id={ `${item.id}` }
                onChange={ handleUpdate }
              />
              <label>{item.name}</label>
              <Button
                type="button"
                onClick={ () => handleUpdateSelected(item) }
              >
                Editar

              </Button>
              <Button
                type="button"
                $color="red"
                onClick={ () => handleDeleteSelected(item) }
              >
                Delete

              </Button>
            </ListItem>
          ))}
        </List>
        <Div>
          <Button
            type="button"
            onClick={ handleMoveUp }
            disabled={ !selectedId }
          >
            Mover para cima

          </Button>
          <Button
            type="button"
            onClick={ handleMoveDown }
            disabled={ !selectedId }
          >
            Mover para baixo

          </Button>
        </Div>
        <Div>
          <Button type="reset" $color="red">Deletar tudo</Button>
          <Button
            type="button"
            $color="green"
            onClick={ handleClearCompleted }
          >
            Limpar finalizadas
          </Button>
        </Div>
      </Form>

    </Main>
  );
}

export default App;
