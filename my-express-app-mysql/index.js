// require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const movieRouter  = require('./src/routes/movieRouter');
const cors = require('cors');


var corsOptions = {
  origin: 'http://localhost:3000', // Ganti dengan domain yang diizinkan
  optionsSuccessStatus: 200 // Untuk beberapa browser lama
};


app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', movieRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
