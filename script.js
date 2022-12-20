const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.getElementById('apaga-tudo');
const removeCompletedItems = document.getElementById('remover-finalizados');

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

removeCompletedItems.addEventListener('click', () => {
  const items = taskList.querySelectorAll('.completed');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
});

window.onload = () => {
  const getTaskItem = localStorage.getItem('taskItem');
  taskList.innerHTML = getTaskItem;
  paintTask();
};
