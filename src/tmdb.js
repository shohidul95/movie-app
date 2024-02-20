const axios = require('axios');

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = process.env.TMDB_API_KEY; // get the API key from the .env file

async function getPopularMovies() {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    return [];
  }
}   

module.exports = {  // export the function so it can be used in other files
    getPopularMovies
};