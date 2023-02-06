//Requisito 4
//Função que gera a cor aleatória em hexadecimal (Inspirado no artigo https://horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/)
//Função Math.random()*16 : gera um número decimal aleatorio entre 0 e 16
//Função Math.floor : arrendonda o número para cima (para um inteiro)
const generateColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random()*16)];
   }
   return color;
}

// Requisito 2 - Função que cria as divs
const createDivColor = (color) => {
  const colorPalette = document.getElementById('color-palette');
  const divColor = document.createElement('div');
  divColor.classList.add('color');
  divColor.style.backgroundColor = color;
  colorPalette.appendChild(divColor);

  // Requisito 8 - Cor preta como cor inicial da paleta
  if (color === 'black') {
    divColor.classList.add('selected');
  }

}

// Requisito 3 - Primeira div com cor preta
createDivColor('black');
// Adiciona as demais divs com cores aleatórias
for (let index = 1; index <= 3; index += 1) {
  createDivColor(generateColor());
}

// Requisito 4 - Adicione o botão para gerar cores aleatórias
const generateButton = document.getElementById('button-random-color');

const inputColor = () => {
  const divColor = document.getElementsByClassName('color');
  for (let index = 1; index < divColor.length; index += 1) {
    divColor[index].style.backgroundColor = generateColor();
  }

  // Requisito 5 - Salvar as cores geradas no localStorage
  const colorPalette = {
    1: divColor[1].style.backgroundColor,
    2: divColor[2].style.backgroundColor,
    3: divColor[3].style.backgroundColor,
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
}

generateButton.addEventListener('click', inputColor);

// Requisito 5 - Manter a paleta de cores gerada após recarregar a página
const initialize = () => {
  const divColor = document.getElementsByClassName('color');
  const colorPalette = JSON.parse(localStorage.getItem('colorPalette'));
  if (colorPalette) {
    for (let index = 1; index < divColor.length; index += 1) {
      divColor[index].style.backgroundColor = colorPalette[index];
    }
  }
};

window.onload = () => {
  initialize();
  restoreDraw();
};

// Requisito 6 - Adicione à página um quadro com 25 pixels
const addPixelBoard = (number) => {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < number; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('line');
    pixelBoard.appendChild(pixelLine);
    for (let index = 0; index < number; index += 1) {
      const pixelItem = document.createElement('div');
      pixelItem.classList.add('pixel');
      pixelLine.appendChild(pixelItem);
    }
  }
};
addPixelBoard(5);

// Requisito 7 - no CSS

// Requisito 9 - Função para selecionar uma cor na paleta
const selectColor = (event) => {
  const selectedColor = document.getElementsByClassName('selected')[0];
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
};

const divColor = document.getElementsByClassName('color');
for (let index = 0; index < divColor.length; index += 1) {
  divColor[index].addEventListener('click', selectColor);
}

// Requisito 10 - Função para preencher o pixel do quadro com a cor selecionada
const paintPixel = (event) => {
  const selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;

  //Requisito 12
  saveDraw();

};
const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
};
// const paintPixel = () => {
//   const pixels = document.getElementsByClassName('pixel');
//   for (let index = 0; index < pixels.length; index += 1) {
//     pixels[index].addEventListener('click', (event) => {
//       const selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
//       event.target.style.backgroundColor = selectedColor;
//     });
//   };
//   //Requisito 12
//   saveDraw();
// };
// paintPixel();

// Requisito 11 - Botão para retornar a cor do quadro para a cor inicial
const resetBoard = () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  };
  saveDraw(); //inclui aqui para também salvar se a pessa resetar e sair da página
};
const resetButton = document.getElementById('clear-board');
resetButton.addEventListener('click', resetBoard);

// Requisito 12 - salvar e recuperar o histórico do desenho
const saveDraw = () => {
  const pixelBoard = {};
  
  for (let index = 0; index < pixels.length; index += 1) {
    pixelBoard[index] = pixels[index].style.backgroundColor;  
    if (pixelBoard[index] === '') {
      pixelBoard[index] = 'white';
    }
  }; 
  localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard))
};

const restoreDraw = () => {
  const pixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  if (pixelBoard) {
    for (let index in pixelBoard)
    pixels[index].style.backgroundColor = pixelBoard[index];
  }
};

// const divColorTwo = document.getElementsByClassName('color')[1];
// const divColorThree = document.getElementsByClassName('color')[2];
// const divColorFour = document.getElementsByClassName('color')[3];

// const divColor = document.getElementsByClassName('color');
// const generateButton = document.getElementById('button-random-color');

// const inputColor = () => {
//   color = generateColor();
//   for (let index = 1; index < divColor.length; index += 1) {
//     divColor[index].style.backgroundColor = color;

//     localStorage.setItem(`div${index}`, color);

//     color = generateColor();
//   }
// };

// Requisito 5
// window.onload = () => {
//   for (let index = 1; index < 3; index += 1) {
//     previousColor = localStorage.getItem(`div${index}`);
//     if (previousColor) {
//       divColor[index].style.backgroundColor = previousColor;
//     }
//   }
// };