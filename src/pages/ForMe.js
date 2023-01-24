import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";

const ForMe = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  const sortMovies = () => {
    let movies = localStorage.movies;
    return movies.split("-");
  };

  return (
    <main>
      <Navigation />
      <h1>React Cinéma</h1>
      <section className="movies">
        {localStorage.movies == undefined || localStorage.movies == "-" ? (
          <h2>Aucun coups de coeur ...</h2>
        ) : (
          movies.map((movie) =>
            sortMovies().map((sort) => {
              if (sort == movie.id) {
                return <Cards key={movie.id} movie={movie} page="ForMe" />;
              }
            })
          )
        )}
      </section>
    </main>
  );
};

export default ForMe;
