import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";
const baseUrl = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button className="banner__btns">Play</button>
          <button className="banner__btns">My List</button>
        </div>
        <h2 className="description">{movie.overview?.substring(0, 150)}..</h2>
      </div>
      <div className="fadebottom"></div>
    </header>
  );
};

export default Banner;
