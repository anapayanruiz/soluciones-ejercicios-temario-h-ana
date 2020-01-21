'use strict';

const tasks = [
    {
      name: 'Recoger setas en el campo',
      completed: true
    },
    {
      name: 'Comprar pilas',
      completed: true
    },
    {
      name: 'Poner una lavadora de blancos',
      completed: true
    },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  
];

const ulElement = document.querySelector('.js-list');
const resetElement = document.querySelector('.js-reset');

function paintTasks() {
     let className;
     let checked;
     let htmlCode='';
    for (let i=0; i < tasks.length; i ++) {
        if(tasks[i].completed === true){
          className ='through'
          checked ='checked'
        } else{
          className ='';
          checked ='';
        }

      htmlCode += `<li class="${className}">`;
      htmlCode += `<input class="js-checkbox" 
      type=checkbox value="${i}" ${checked}/>`;
      htmlCode += `${tasks[i].name}</li>`;  
    }
    
  ulElement.innerHTML = htmlCode;
  
}; 
  

  
const handleCheckbox = (ev) => {
  ev.preventDefault();
  const indexCheckbox = parseInt(ev.target.value);
  tasks[indexCheckbox].completed = !tasks[indexCheckbox].completed;
  updateAll();
};

const listenCheckboxEvents = () => {
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener('change', handleCheckbox);  
  }
};

const updateAll = () => {
  paintTasks();
  listenCheckboxEvents();
}

updateAll();

const handleReset = (ev) => {
  ev.preventDefault();
  for (const task of tasks) {
    task.completed = false;
  }
  updateAll();
}

resetElement.addEventListener('click', handleReset);