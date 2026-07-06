const express = require('express');
const app = express();
const port = 3000;

const { movieRouter } = require('./src/routes/movieRouter');

app.use('/api', movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
