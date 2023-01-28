//getElementById só retorna um unico elemento
const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

//getElementsByClassName retorna um HTMLCollection, mesmo tendo só um elemento na lista, a posição dele precisa ser declarada ([0])
const emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'pink';

//querySelectorAll retorna uma NodeList, a posição dos elementos precisa ser declarada também
const titleEmergencyTasks = document.querySelectorAll('.emergency-tasks div h3')
for (let index = 0; index < titleEmergencyTasks.length; index += 1) {
  titleEmergencyTasks[index].style.backgroundColor = 'purple';
}
// Utilizar o for é a mesma coisa que fazer separado
// titleEmergencyTasks[0].style.backgroundColor = 'purple';
// titleEmergencyTasks[1].style.backgroundColor = 'purple';

//querySelector retorna o primeiro elemento encontrado
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'yellow';

const titleNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div h3');
for (let index = 0; index < titleNoEmergencyTasks.length; index += 1) {
  titleNoEmergencyTasks[index].style.backgroundColor = 'black';
}

// titleNoEmergencyTasks[0].style.backgroundColor = 'black';
// titleNoEmergencyTasks[1].style.backgroundColor = 'black';

//getElementsByTagName retorna um HTMLCollection, mesmo tendo só um elemento na lista, a posição dele precisa ser declarada ([0])
let footer = document.getElementsByTagName('footer')[0];
footer.style.backgroundColor = 'rgb(0, 53, 51)';