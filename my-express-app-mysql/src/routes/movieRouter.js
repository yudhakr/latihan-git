const express = require("express")
const movieRouter = express.Router()

const { readmovie, readmovieid, createmovie, updatemovie, deletemovie } = require("../controllers/movieController.js")
const { authJWT } = require("../middleware/auth.js")

movieRouter.get('/film', authJWT, readmovie);
movieRouter.get('/film/:id', authJWT, readmovieid);
movieRouter.post('/film', authJWT, createmovie);
movieRouter.put('/film/:id', authJWT, updatemovie);
movieRouter.delete('/film/:id', authJWT, deletemovie);

module.exports = movieRouter