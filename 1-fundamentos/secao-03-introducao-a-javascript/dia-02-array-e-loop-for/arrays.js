let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa ao final da lista
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('Meditar'); // adiciona mais uma tarefa ao início da lista
console.log(tasksList);

tasksList.pop(); // remove o ultimo elemento 
console.log(tasksList);

tasksList.shift(); // remove o primeiro elemento 
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião'); //procura o indice do elemento
console.log(indexOfTask);