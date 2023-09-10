import React, {useState, useEffect} from 'react'

import axios from 'axios';


const NetflixRow = ( { title, fetchUrl, isLargeRow = false } ) => {

    const [movies, setMovies] = useState([]);

    const base_url = 'https://image.tmdb.org/t/p/original';

    const fetchData = async () => {

      const netflixData = await axios.get(fetchUrl);
      setMovies( netflixData.data.results );
      
      return netflixData;
    }

    useEffect(() => {

      fetchData();

    }, [fetchUrl]);

    console.log(movies);
    


  return (

    <div>
    
    <h2 style={{ color: 'white' }} > {title} </h2>
    
    <div className='row-posters'>

    { movies.map( movie => (

      <img src={ `${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path }` } alt= {movie.name} 
      key={movie.id} className= { `row-images ${isLargeRow && 'large-row-images' }` }
       />
    ) ) }
      
    
    </div>
    </div>

  )




}



export default NetflixRow
