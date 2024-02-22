const express = require('express');
require ('dotenv').config(); // to use .env file
const app = express();
const port = process.env.PORT || 3000;
const { getPopularMovies } = require('./tmdb');
const connectDB = require('./db'); // import the connectDB function from db.js

connectDB(); // connect to the database

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
} );

app.use(express.json()); // to parse the body of the request message

app.get('/', (req, res) => {  // root route
  res.send('Hello World!');
} );

app.get('/movies/popular', async (req, res) => {  // route to get popular movies
  const movies = await getPopularMovies();
  res.json(movies);
} );

app.listen(port, () => {  // start the server
  console.log(`Server is running at http://localhost:${port}`);
} );  