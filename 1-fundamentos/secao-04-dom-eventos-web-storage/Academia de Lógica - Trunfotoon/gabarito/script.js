const cartoonSelection = document.getElementsByClassName('cartoons')[0];

const createCartoonImage = (id, src, name) => {
  const img = document.createElement('img');
  img.id = id;
  img.setAttribute('src', src);
  img.setAttribute('alt', name);
  img.classList.add('card');

  cartoonSelection.appendChild(img);
};

const setCartoonSelection = () => {
  for (const cartoon of cartoons) {
    createCartoonImage(cartoon.id, cartoon.imageUrl, cartoon.name);
  }
}

setCartoonSelection();