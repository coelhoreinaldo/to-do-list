const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.getElementById('apaga-tudo');
const removeCompletedItems = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const selected = document.getElementsByClassName('selected');
const removeSelected = document.getElementById('remover-selecionado');

const taskItemsLocalStorage = () => {
  localStorage.setItem('taskItem', taskList.innerHTML);
};

const paintTask = () => {
  const taskItems = document.querySelectorAll('.task-item');

  for (let i = 0; i < taskItems.length; i += 1) {
    taskItems[i].addEventListener('click', () => {
      for (let j = 0; j < taskItems.length; j += 1) {
        taskItems[j].classList.remove('selected');
      }
      taskItems[i].classList.add('selected');
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

    input.value = '';
    paintTask();
  });
};

addTask();

taskList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
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

saveTasks.addEventListener('click', taskItemsLocalStorage);

const moveUp = () => {
  if (selected[0] && selected[0] !== null) {
    const selectedParentNode = selected[0].parentNode;
    const previousElement = selected[0].previousElementSibling;
    if (previousElement && selectedParentNode) {
      selectedParentNode.insertBefore(selected[0], previousElement);
    }
  }
};

const moveDown = () => {
  if (selected[0] && selected[0] !== null) {
    const selectedParentNode = selected[0].parentNode;
    if (selected[0].nextElementSibling && selectedParentNode) {
      const selNextElement = selected[0].nextElementSibling.nextElementSibling;
      selectedParentNode.insertBefore(selected[0], selNextElement);
    }
  }
};

moveUpBtn.addEventListener('click', moveUp);

moveDownBtn.addEventListener('click', moveDown);

removeSelected.addEventListener('click', () => {
  for (let i = 0; i < selected.length; i += 1) {
    selected[i].remove();
  }
});

window.onload = () => {
  const getTaskItem = localStorage.getItem('taskItem');
  taskList.innerHTML = getTaskItem;
  paintTask();
};
