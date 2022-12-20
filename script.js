const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearAllBtn = document.getElementById('apaga-tudo');
const removeCompletedItems = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const moveUpBtn = document.getElementById('mover-cima');
const moveDownBtn = document.getElementById('mover-baixo');
const selected = document.getElementsByClassName('selected');

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
  const selectedParentNode = selected[0] ? selected[0].parentNode : undefined;
  const previousElement = selected[0] ? selected[0].previousElementSibling : undefined;
  if (previousElement !== null) {
    selectedParentNode ? selectedParentNode.insertBefore(selected[0], previousElement) : undefined;
  }
};

const moveDown = () => {
  const selectedParentNode = selected[0] ? selected[0].parentNode : undefined;
  const selNextElement = selected[0] ? selected[0].nextElementSibling?.nextElementSibling : undefined;
    if (selected[0] ? selected[0].nextElementSibling !== null : undefined) {
      selectedParentNode ? selectedParentNode.insertBefore(selected[0], selNextElement) : undefined;
    }
};

moveUpBtn.addEventListener('click', moveUp);

moveDownBtn.addEventListener('click', moveDown);

// A página deve possuir dois elementos button, um com o ID mover-cima e o outro com o ID mover-baixo;

// Dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas deve deixá-los permanecer nas posições esperadas;

// Caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento;

// Caso nenhum elemento esteja selecionado, ao clicar nos botões a lista não deve ser alterada;

// Um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido;

// Caso especial! Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada.
window.onload = () => {
  const getTaskItem = localStorage.getItem('taskItem');
  taskList.innerHTML = getTaskItem;
  paintTask();
};
