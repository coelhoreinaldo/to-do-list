const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

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
    paintTask();
  });
};

addTask();

taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
// };

window.onload = () => {
  const getTaskItem = localStorage.getItem('taskItem');
  taskList.innerHTML = getTaskItem;
  paintTask();
};

// Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through". Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

// O que será testado:

// Antes da ação ser disparada, o elemento adicionado à lista não deve possuir a classe completed nem o estilo text-decoration: line-through solid black;

// O item da lista ao receber duplo clique deve passar a ter a classe completed e o estilo text-decoration com o valor line-through solid black;

// O item da lista ao receber um segundo duplo clique, não deve mais possuir a classe completed nem o estilo text-decoration: line-through solid black.
