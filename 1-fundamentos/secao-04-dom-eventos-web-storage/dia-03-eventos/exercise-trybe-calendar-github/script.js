
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.
// 1- Crie um calendário dinamicamente
const createWeekDays = () => {
  const weekDaysList = document.getElementById('days');

  for (let day of decemberDaysList) {
    let dayItem = document.createElement('li');
    dayItem.classList.add('day');
    dayItem.innerHTML = day;

    if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add('friday');
    }

    weekDaysList.appendChild(dayItem);
  }

};
createWeekDays();

// 2 - Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
const changeBackgroundColor = () => {
  const getHolidays = document.querySelectorAll('.holiday');
  for (let day of getHolidays) {
    if (day.style.backgroundColor === 'green') {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'green';
    }
  }
};

const feriadosBtn = document.getElementById('btn-holiday');
feriadosBtn.addEventListener('click',changeBackgroundColor);

//3 - Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira
const changeTextSextou = () => {
  const fridayList = document.getElementsByClassName('friday');
  const fridayDays = [4, 11, 18, 25]
  for (let index in fridayList) {
    if (fridayList[index].innerHTML === 'SEXTOU!') {
      fridayList[index].innerHTML = fridayDays[index];
    } else {
      fridayList[index].innerHTML = 'SEXTOU!';
    }
  }
};

const fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', changeTextSextou);

//Gabarito
/*
const displayFridays = (fridaysArray) => {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';
  getFridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);
*/

//4 - Implemente duas funções que criem um efeito de "zoom"
const zoomMouseOver = (event) => {
  event.target.style.fontSize = '30px';
};

const zoomMouseOut = (event) => {
  event.target.style.fontSize = '20px';
};

const weekDays = document.getElementById('days');
weekDays.addEventListener('mouseover', zoomMouseOver);
weekDays.addEventListener('mouseout', zoomMouseOut);

//Gabarito
/*
const dayMouseOver = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}
const dayMouseOut = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}
dayMouseOver();
dayMouseOut();
*/

//5 - Implemente uma função que selecione uma tarefa
const selectTask = (event) => {
  const selected = document.querySelector('.selected');
  event.target.classList.add('selected');
  if (selected) {
    selected.classList.remove('selected');
  }
};
const projeto = document.getElementsByClassName('task')[0];
const exercicios = document.getElementsByClassName('task')[1];
projeto.addEventListener('click', selectTask);
exercicios.addEventListener('click', selectTask);

//Gabarito
/*
const setTaskClass = () => {
  let tasks = document.getElementsByClassName('task');
  for (const task of tasks) {
    task.addEventListener('click', (event) => {
      let previous = document.querySelector('.selected');
      event.target.classList.add('selected');
      if (previous !== null) {
        previous.classList.remove('selected');
      }
    });
  }
};
setTaskClass();
*/

// 6 - Implemente uma função que atribua a cor da tarefa ao dia do calendário
const colorTask = (event) => {
  const selected = document.querySelector('.selected');
  if (!selected || event.target.style.color === selected.style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)';
    
  } else {
    event.target.style.color = selected.style.backgroundColor;
  }
};
const days = document.querySelector('#days');
days.addEventListener('click', colorTask);

//Gabarito
/*
const setDayColor = () => {
  let days = document.querySelector('#days');
  days.addEventListener('click', (event) => {
    let selectedTask = document.querySelector('.selected');
    if (selectedTask === null || 
      event.target.style.color === selectedTask.style.backgroundColor) {
      // Se não houver tarefa selecionada
      // ou se o dia clicado já é da cor selecionada
      // aplicaremos a cor padrão
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      // Se o dia clicado é de cor diferente da selecionada
      // aplica a cor selecionada ao dia
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  });
};
setDayColor();
*/

// 7 - Vamos adicionar compromissos ao seu calendário?
const addTask = () => {
  const input = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const btnAdd = document.getElementById('btn-add');
  btnAdd.addEventListener('click', () => {
    if (input.value.length === 0) {
      window.alert('Insira uma tarefa');
    } else {
      let taskItem = document.createElement('li');
      taskItem.innerHTML = input.value;
      taskList.appendChild(taskItem);
    }
  });
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && input.value.length > 0) {
      let taskItem = document.createElement('li');
      taskItem.innerHTML = input.value;
      taskList.appendChild(taskItem);
      input.value = '';
    }
  })
};
addTask();

/* Somente para o botão (sem o evento do enter)
const addTask = () => {
  const input = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (input.value.length === 0) {
    window.alert('Insira uma tarefa');
  } else {
    let taskItem = document.createElement('li');
    taskItem.innerHTML = input.value;
    taskList.appendChild(taskItem);
  }
};
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', addTask);
*/