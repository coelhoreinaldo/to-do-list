const createTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

const addTask = () => {
  createTaskBtn.addEventListener('click', () => {
    const inputValue = input.value;

    const createTask = document.createElement('li');
    createTask.innerHTML = inputValue;
    taskList.appendChild(createTask);

    input.value = '';
  });
};

addTask();

// A página deve possuir um elemento do tipo button;
// O elemento button deve possuir o ID criar-tarefa;
// Ao digitar o texto minha primeira tarefa e clicar no botão criar-tarefa, o texto digitado deve aparecer na lista e desaparecer do campo de input;
// A adição de elementos na lista será feita algumas vezes, portanto todos os itens criados devem permanecer na lista na medida em que novos itens são adicionados.
