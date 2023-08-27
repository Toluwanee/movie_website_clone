import {useState, useEffect } from 'react'

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';
// f12edf00
const API_URL = 'http://www.omdbapi.com/?apikey=f12edf00'

const movie1 =
  {
    "Title": "Miles Morales Ultimate Spiderman",
    "Year": "2021",
    "imdbID": "tt14311386",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg"
}


const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (


    <div className='app'>

      <div>
      <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="YIFY"></img>
      </div>

    <div className='title'>
    <h1>Download YTS YIFY movies: HD smallest size</h1>

    </div>

      <div className='search'>
        <input placeholder='Search for movies'
        value='Search'
        onChange={() => {}}
        />

      <img src={SearchIcon}
      alt='search'
      onClick={() => {}}
      />
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
      
      </div>
        ) :
        <div className= 'empty'>
          <h2>No movies</h2>
        </div>
      }

    </div>
  )
}

export default App;
