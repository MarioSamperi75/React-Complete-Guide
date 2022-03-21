import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //  we use the function fetch, that gets a promise
  //  we get a Json object that we transform to a js object by using json()
  //  and then we update a state containing the array of moovies
  //  transformedMovies: we have also to adapt the json field names
  //  so that they match the names we have in our components

  //  async/await  structure
  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      // fetch doesn't generate an error for a 400 or 500 response
      // we have to generate it
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // if there is an error we will go directly to the catch block

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>Movies not found.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  // we add the error as render condition
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
