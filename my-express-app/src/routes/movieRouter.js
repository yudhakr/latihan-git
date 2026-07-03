const express = require("express")
const movieRouter = express.Router()



const {
    loggerMiddleware,
  tokenMiddleware,
  yearMiddleware,
  timeMiddleware,
  checkMovieIdMiddleware,
  getMoviesApi,
  getMovieByIdApi,
  getMovieById
} = require("../controllers/movieController.js")

movieRouter.get('/movies',getMoviesApi);
movieRouter.get('/movies/:id',getMovieByIdApi);

module.exports = {movieRouter}