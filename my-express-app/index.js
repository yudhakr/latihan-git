const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
  { id: 5, title: "Para Kiai", year: 2026 },
  { id: 6, title: "Para Pencari Tuhan", year: 2023 },
  { id: 7, title: "Dragon Ball", year: 2024 },
  { id: 8, title: "Lupin", year: 2025 }
];

// ============ MIDDLEWARE ============

const loggerMiddleware = (req, res, next) => {
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  next();
};

const tokenMiddleware = (req, res, next) => {
  let { token } = req.query;

  if (token === "1200") {
    next();
  } else {
    res.status(401).json({ message: "Token tidak valid" });
  }
};

const yearMiddleware = (req, res, next) => {
  let { year } = req.query;
  if (year !== undefined) {
    if (isNaN(Number(year))) {
      return res.status(400).json({ message: "Year harus berupa angka" });
    }
    console.log(`Filter by year: ${year}`);
  }
  next();
};

const timeMiddleware = (req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
};

const checkMovieIdMiddleware = (req, res, next) => {
  let { id } = req.params;
  let result = movies.find(item => item.id === Number(id));

  if (result) {
    next();
  } else {
    res.status(404).json({ message: "Movie tidak ditemukan" });
  }
};

// ============ HANDLERS ============

const getMoviesApi = (req, res) => {
  let { title, year } = req.query;
  let result = movies.filter((item) => {
    let match = true;
    if (title) {
      match = match && item.title.toLowerCase().includes(title.toLowerCase());
    }
    if (year) {
      match = match && item.year === Number(year);
    }
    return match;
  });
  res.json(result);
};

const getMovieByIdApi = (req, res) => {
  let { id } = req.params;
  let result = movies.find((item) => item.id === Number(id));
  res.json(result);
};

const getMovieById = (req, res) => {
  let { id } = req.params;
  let result = movies.find((item) => item.id === Number(id));
  if (!result) {
    res.status(404).send(`Movie dengan ID ${id} tidak ditemukan`);
    return;
  }
  res.send(`<h3>${result.title} (${result.year})</h3>`);
};

// ============ ROUTES ============

app.get('/api/movies', loggerMiddleware, tokenMiddleware, yearMiddleware, getMoviesApi);

app.get('/api/movies/:id', loggerMiddleware, timeMiddleware, checkMovieIdMiddleware, getMovieByIdApi);

app.get('/movies/:id', getMovieById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
