'use strict';

const tasks = [{
    name: "Recoger setas en el campo",
    completed: true
  },
  {
    name: "Comprar pilas",
    completed: true
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false
  }
];


const updateTasks = (ev) => {
  ev.preventDefault();

  const liClicked = ev.target;  
  const dataset = liClicked.dataset.index;
  tasks[dataset].completed = !tasks[dataset].completed;

  printTasks();
};




const printTasks = () => {
  let listHtml = '';
  for (let i = 0; i < tasks.length; i++) {
    listHtml += `<li class="${getItemclassNames(tasks[i].completed)}" data-index="${i}">
    ${getCheckboxHtml(tasks[i].completed)}
    ${tasks[i].name}</li>`;
  }
  list.innerHTML = listHtml;
};


const getItemclassNames = (completed) => {
    return completed ? 'through' : '';
};

const getCheckboxHtml = (completed) => {
  if (completed) {
    return `<input type="checkbox" class="js-checkbox" checked />`;
  } else {
    return `<input type="checkbox" class="js-checkbox" />`  
  }
};


const list = document.querySelector('.js-list');
list.addEventListener('click', updateTasks);


printTasks();