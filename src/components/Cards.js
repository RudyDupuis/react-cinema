import React from "react";

const Cards = (props) => {
  const dateFormat = (date) => {
    let newDate = [];
    newDate = date.split("-");

    return newDate[2] + "/" + newDate[1] + "/" + newDate[0];
  };

  const addForMe = (id) => {
    if (localStorage.movies == undefined) {
      localStorage.movies = id + "-";
    } else {
      let movies = localStorage.movies;
      movies = movies.split("-");

      if (movies.indexOf(String(id)) == -1) {
        movies[movies.length - 1] = String(id);
        movies = movies.join("-");
        localStorage.movies = movies + "-";
      }
    }
  };

  const removeForMe = (id) => {
    let movies = localStorage.movies;
    movies = movies.split("-");

    console.log(movies);

    function removeValue(arr, value) {
      return arr.filter(function (ele) {
        return ele !== value;
      });
    }

    movies = removeValue(movies, String(id));
    movies = removeValue(movies, "");

    console.log(movies);

    movies = movies.join("-");
    localStorage.movies = movies + "-";
    window.location.reload();
  };

  return (
    <div className="cards">
      <img
        src={"https://image.tmdb.org/t/p/original" + props.movie.poster_path}
        alt={"Affiche du film" + props.movie.original_title}
      />
      <h3>{props.movie.original_title}</h3>
      <p>Sortie le : {dateFormat(props.movie.release_date)}</p>
      <p className="average">
        {props.movie.vote_average + "/10"}
        <i className="fa-solid fa-star"></i>
      </p>
      <div className="genre">
        {props.movie.genre_ids.map((genre, index) => (
          <p key={index}>{genre}</p>
        ))}
      </div>
      <div className="synopsis">
        <h3>Synopsis</h3>
        <p>{props.movie.overview}</p>
      </div>
      {props.page == "Home" ? (
        <button onClick={() => addForMe(props.movie.id)}>
          <i className="fa-solid fa-heart"></i>
        </button>
      ) : (
        <button onClick={() => removeForMe(props.movie.id)}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      )}
    </div>
  );
};

export default Cards;
