const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const response = await fs.readFile(moviesPath);
    const data = JSON.parse(response);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const app = express();
app.use(express.json());

// listar todos os filmes do JSON
app.get('/movies', async (req, res) => {
  try {
    const data = await readFile();
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
})

// listar todos os filmes do JSON a partir de uma busca
app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const data = await readFile();

    if (q) {
      const filteredList = data.filter(({movie}) => movie.toLowerCase().includes(q.toLowerCase()));
      res.status(200).json(filteredList);
    }

    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// listar um filme do JSON por id
app.get('/movies/:id', async (req, res) => {
  try {
    const data = await readFile();
    const { id } = req.params;
    const findElem = data.find((elem) => elem.id === Number(id));
    if (!findElem) {
      return res.status(404).json({ message: 'Element not found' });
    }
    res.status(200).json(findElem);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// cadastrar um novo filme no JSON
app.post('/movies', async (req, res) => {
  try {
    const data = await readFile();
    const newData = { ...req.body}; // { movie, price } = req.body;
    const newId = data[data.length - 1].id + 1;
    const newMovie = { id: newId, ...newData};
    const updatedList = JSON.stringify([...data, newMovie], null, 2);
    await fs.writeFile(moviesPath, updatedList);
    res.status(201).json(updatedList); // res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// editar informações de um filme do JSON
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const data = await readFile();

    // primeiro modo:
    // const movieToUpdate = data.find((movie) => movie.id === Number(id));
    // if (!movieToUpdate) {
    //   res.status(404).json({ message: "Movie not found" });
    // }

    // const filteredMovies = data.filter((movie) => movie.id !== Number(id));
    // const updatedMovie = {id: movieToUpdate.id, movie, price};
    // const newList = [...filteredMovies, updatedMovie];

    // await fs.writeFile(moviesPath, JSON.stringify(newList, null, 2));

    // segundo modo:
    const index = data.findIndex((element) => element.id === Number(id));
    if (index < 0) {
      res.status(404).json({ message: "Movie not found" });
    }
    data[index] = { id: Number(id), movie, price };
    const updatedList = JSON.stringify(data, null, 2);
    await fs.writeFile(moviesPath, updatedList);
    
    res.status(201).json(data);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// deletar um filme do JSON
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readFile();
    const arrayPosition = data.findIndex((movie) => movie.id === Number(id)); // findIndex retorna -1 se não encontrar

    if (arrayPosition < 0) {
      res.status(404).json({ message: "Movie not found" });
    }

    // primeiro modo:
    // data.splice(arrayPosition, 1);
    // const updatedList = JSON.stringify(data, null, 2);

    // segundo modo:
    const filteredMovies = data.filter((movie) => movie.id !== Number(id));
    const updatedList = JSON.stringify(filteredMovies, null, 2);
    
    await fs.writeFile(moviesPath, updatedList);
  
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;