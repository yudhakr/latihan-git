require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const movieRouter  = require('./src/routes/movieRouter');
const userRouter  = require('./src/routes/userRouter');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')


var corsOptions = {
  origin: "http://localhost:5173", // Ganti dengan domain yang diizinkan
  optionsSuccessStatus: 200 // Untuk beberapa browser lama
};


app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', movieRouter);
app.use('/', userRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
