const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.getElementById('apaga-tudo');

const taskItemsLocalStorage = () => {
  localStorage.setItem('taskItem', taskList.innerHTML);
};

const paintTask = () => {
  const taskItems = document.querySelectorAll('.task-item');

  for (let i = 0; i < taskItems.length; i += 1) {
    taskItems[i].addEventListener('click', () => {
      for (let j = 0; j < taskItems.length; j += 1) {
        taskItems[j].style.backgroundColor = 'white';
      }
      taskItems[i].style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
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
    paintTask();
  });
};

addTask();

taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
  taskItemsLocalStorage();
});

clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});
// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

// O que será testado:

// A página deve possuir um elemento button com o ID apaga-tudo;

// Dado que uma lista possua tarefas, ao dar um clique no botão a lista deve ficar vazia.
window.onload = () => {
  const getTaskItem = localStorage.getItem('taskItem');
  taskList.innerHTML = getTaskItem;
  paintTask();
};
