import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTralierURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTralierURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTralierURL(urlParams.get("v"));
          console.log(trailerURL);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2 className="row_heading">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={isLargeRow ? "row_posterLarge" : "row_poster"}
            src={
              isLargeRow
                ? base_url + movie.poster_path
                : base_url + movie.backdrop_path
            }
            onClick={() => handleClick(movie)}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
