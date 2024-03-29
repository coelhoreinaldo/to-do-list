import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { AddTaskDiv,
  Button,
  Checkbox,
  ConfigListButtons,
  Form,
  Input,
  Label, List, ListItem, ListItemButtons, Main, TaskContainer } from './App';

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
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
        <AddTaskDiv>
          <Input
            type="text"
            placeholder="Digite uma tarefa..."
            onChange={ handleChange }
            maxLength={ 100 }
            value={ task }
          />
          <Button $color="#14b34b" type="submit">
            {!idToEdit
              ? 'Adicionar' : 'Editar'}

          </Button>
        </AddTaskDiv>
        <List>
          {tasks.map((item) => (
            <ListItem
              key={ item.id }
              onClick={ () => handleSelected(item.id) }
              $isSelected={ selectedId === item.id }
            >
              <TaskContainer>
                <Checkbox
                  type="checkbox"
                  id={ `${item.id}` }
                  onChange={ handleUpdate }
                  checked={ item.completed }
                />
                <Label
                  $completed={ item.completed }
                >
                  {item.name}

                </Label>
              </TaskContainer>
              <ListItemButtons>

                <Button
                  type="button"
                  $color="#bfb006"
                  onClick={ () => handleUpdateSelected(item) }
                >
                  <i className="ri-edit-fill" />

                </Button>
                <Button
                  type="button"
                  $color="#c2112f"
                  onClick={ () => handleDeleteSelected(item) }
                >
                  <i className="ri-delete-bin-7-fill" />

                </Button>
              </ListItemButtons>
            </ListItem>
          ))}
        </List>
        <ConfigListButtons>
          <Button
            type="button"
            onClick={ handleMoveUp }
            disabled={ !selectedId }
          >
            <i className="ri-arrow-up-line" />

          </Button>
          <Button
            type="button"
            onClick={ handleMoveDown }
            disabled={ !selectedId }
          >
            <i className="ri-arrow-down-line" />

          </Button>
          <Button type="reset" $color="#c2112f">Deletar tudo</Button>
          <Button
            type="button"
            $color="#14b34b"
            onClick={ handleClearCompleted }
          >
            Limpar finalizadas
          </Button>
        </ConfigListButtons>
      </Form>

    </Main>
  );
}

export default App;
