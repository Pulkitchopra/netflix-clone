import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from 'axios';


import movieTrailer from 'movie-trailer';

const NetflixRow = ( { title, fetchUrl, isLargeRow = false } ) => {

    const [movies, setMovies] = useState([]);



    const [trailer, setTrailer] = useState('');

    const base_url = 'https://image.tmdb.org/t/p/original/';

    const fetchData = async () => {

      const netflixData = await axios.get(fetchUrl);

      setMovies( netflixData.data.results );
      return netflixData;
    }





    useEffect(() => {

      fetchData();
      // eslint-disable-next-line
    }, [fetchUrl]);

    const opts = {
      
      height: '400',

      width: '100%',

      playerVars: {

        autoplay: 1
      }
    }





    const handleClick = (movie) => {

      if(trailer){

        setTrailer('');
      }
      else{

        movieTrailer(null ,{ tmdbId: movie.id })
        .then((url) => {

          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get('v'));
        }).catch((error) => console.log(error));
      }
    }







  return (

    <div>
    
    <h2 style={{ color: 'white' }} > {title} </h2>
    
    <div className='row-posters'>



    { movies.map( movie => (

      <img src={ `${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path }` } alt= {movie.name} 
      key={movie.id} className= { `row-images ${isLargeRow && 'large-row-images' }` }
      onClick={() => handleClick(movie)}
       />
    ) ) }

    </div>


    { trailer && <YouTube videoId={trailer} opts={opts}  />}
    </div>

  )




}


export default NetflixRow
