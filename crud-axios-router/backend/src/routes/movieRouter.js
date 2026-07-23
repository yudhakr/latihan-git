const express = require("express")
const movieRouter = express.Router()

const { readmovie, readmovieid, createmovie, updatemovie, deletemovie } = require("../controllers/movieController.js")
// const { authJWT } = require("../middleware/auth.js")

movieRouter.get('/film', readmovie);
movieRouter.get('/film/:id', readmovieid);
movieRouter.post('/film', createmovie);
movieRouter.put('/film/:id', updatemovie);
movieRouter.delete('/film/:id', deletemovie);

module.exports = movieRouter