import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [top, setTop] = useState(false);
  const [flop, setFlop] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => setMovies(res.data.results));
  }, [search, top, flop]);

  const sort = (a, b) => {
    if (top) {
      return b.vote_average - a.vote_average;
    } else if (flop) {
      return a.vote_average - b.vote_average;
    } else {
      return a - b;
    }
  };

  return (
    <main>
      <Navigation />
      <h1>React Cinéma</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Chercher un film"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <div>
          <button
            onClick={() => {
              setTop(true);
              setFlop(false);
            }}
          >
            Top <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button
            onClick={() => {
              setTop(false);
              setFlop(true);
            }}
          >
            <i className="fa-solid fa-arrow-down"></i> Flop
          </button>
        </div>
      </div>
      <section className="movies">
        {movies
          .filter((movie) =>
            movie.original_title.toLowerCase().includes(search)
          )
          .sort((a, b) => sort(a, b))
          .map((movie) => (
            <Cards key={movie.id} movie={movie} page="Home" />
          ))}
      </section>
    </main>
  );
};

export default Home;
