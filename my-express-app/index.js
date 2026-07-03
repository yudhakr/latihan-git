const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let movies = [
{id: 1, title: "Spider-Man", year: 2002},
{id: 2, title: "John Wick", year: 2014},
{id: 3, title: "The Avengers", year: 2012},
{id: 4, title: "Logan", year: 2017},
{id: 5, title: "Para Pencari Tuhan", year: 2026}
]

// const getMovies = (req, res) => {
//     let { title } = req.query

//     console.log(title)

//     let result = "";
//     movies.forEach((item, index) => {
//         result += `<h3>${index + 1}. ${item.title} (${item.year})</h3>`;
//     });
//     res.send(result);
// }

// Method untuk mendapatkan file berdasarkan id
const getMovieById = (req, res) => {
 let { id } = req.params
 let result = movies.find((item) => item.id === Number(id));
 if (!result) {
    res.status(404).send(`Movie dengan ID ${id} tidak ditemukan`);
    return;
 }

 res.send(`<h3>${result.title} (${result.year})</h3>`);
}


// PERCOBAAN API
const getMoviesApi = (req, res) => {
    let { title } = req.query

    console.log(title)

    if (title === undefined){ 
        title = ""
    }
    let result = movies.filter((item) =>{
        return item.title.toLowerCase().includes(title.toLowerCase())

    })
    res.send(result)
}

// Method API
const getMovieByIdApi = (req, res) => {
 let { id } = req.params
 let result = movies.find((item) => item.id === Number(id));
 if (!result) {
    res.status(404).send(`Movie dengan ID ${id} tidak ditemukan`);
    return;
 }

 res.send(`<h3>${result.title} (${result.year})</h3>`);
}


const loggerMiddleware = (req, res, next) => {
    console.log(`Method: ${req.method}`)
    console.log(`URL: ${req.url}`)
    next()

}
const tokenMiddleware = (req, res, next) => {
  let { token } = req.query

  if (token === "1200") {
    next()
  } else {
    res.status(401).json({
      message: "Token tidak valid"
    })
  }
}
const checkMovieIdMiddleware = (req, res, next) => {
  let { id } = req.params
  let result = movies.find(item => item.id === Number(id))

  if (result) {
    next()
  } else {
    res.status(404).json({ message: "Movie tidak ditemukan" })
  }
}




app.get('/api/movies', loggerMiddleware, tokenMiddleware, getMoviesApi)

// app.get('/movies', getMovies);
app.get('/movies/:id', getMovieById);


// app.get('/api/movies', getMoviesApi);
app.get('/api/movies/:id',loggerMiddleware, checkMovieIdMiddleware, getMovieByIdApi);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});