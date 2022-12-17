const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

const taskItemsLocalStorage = () => {
  localStorage.setItem('taskItem', taskList.innerHTML);
};

const clickTask = () => {
  const taskItems = document.querySelectorAll('.task-item');

  for (let i = 0; i < taskItems.length; i += 1) {
    taskItems[i].addEventListener('click', () => {
      taskItems[i].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
  console.log(taskItems);
};

const addTask = () => {
  createTaskBtn.addEventListener('click', () => {
    const inputValue = input.value;

    const createTask = document.createElement('li');
    createTask.className = 'task-item';
    createTask.innerHTML = inputValue;
    taskList.appendChild(createTask);

    taskItemsLocalStorage();
    input.value = '';
    clickTask();
  });
};

addTask();

window.onload = () => {
  const getTaskItem = localStorage.getItem('taskItem');
  taskList.innerHTML = getTaskItem;

  clickTask();
};

// Ao clicar em um item da lista, este deve adquirir a cor adicionada à folha de estilo com o padrão: `background-color: nome-da-cor`, não sendo permitido qualquer outro padrão de nomenclatura de cores.

// O que será testado:

// A página ao ser carregada deve possuir os itens da lista sem o estilo CSS background-color: gray;

// Os itens da lista ao serem clicados devem passar a ter o estilo CSS background-color: gray.
