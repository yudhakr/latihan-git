


// ============ ROUTES ============

// app.use(timeMiddleware);

app.use('/api',movieRouter);

app.get('/api/movies/:id', loggerMiddleware, checkMovieIdMiddleware, getMovieByIdApi);

// app.get('/movies/:id', getMovieById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
