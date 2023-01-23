import React, {useEffect, useState}  from 'react';
import axios from "../axios";
import "./Row.css";
import movieTrailer from 'movie-trailer';
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl ,isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function handleClick(movie){

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
        movieTrailer(movie?.name||"")
        //https://www.youtube.com/watch?v=KS2EztRMuRw
      .then(url=>{  
        const urlParams= new URLSearchParams( new URL(url).search);
        
        setTrailerUrl(urlParams.get('v'));

      })
      .catch((error)=>console.log(error))
    }
  }

  
  
  return (
     <div className="row">
      <h2>{title}</h2>
      <div className={`card ${isLargeRow&&"card__big"}`}>
        {movies.map((movie) => {
          return (
            <img 
              src={`${baseUrl}${isLargeRow?movie?.poster_path:movie?.backdrop_path}`}
              key={movie?.id}
              id={movie?.id}
              alt={movie?.name}
              onClick={()=>handleClick(movie)}
            />
          );
        })}

      
      </div>
     {trailerUrl&& <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${trailerUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
      
    </div>
  );
};

export default Row;
