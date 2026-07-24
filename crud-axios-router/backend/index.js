require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const movieRouter  = require('./src/routes/movieRouter');
const userRouter  = require('./src/routes/userRouter');
const categoryRouter = require('./src/routes/categoryRouter');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')


var corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : "*",
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', movieRouter);
app.use('/', userRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/api', categoryRouter);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
