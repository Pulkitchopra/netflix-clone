import React, {useState, useEffect} from 'react'
import './style.css'
import axios from 'axios'




const NetflixBanner = () => {

  const [movie, setMovie] = useState([]);



  const fetchData = async () => {

    try{
  
      const netflixData = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=2fec081181ddf74f7c70a91a466b1dbe&language=en-US' );
      
      setMovie(
        
        netflixData.data.results[

          Math.floor(Math.random() * netflixData.data.results.length - 1)
            
        ]
        );
      }

      catch(error){

        console.log(error)
      }


  }

  useEffect(() => {

    fetchData();
  }, [] )


  const truncate = (string, n) => {
    return (
      string?.length > n ? string.substr(0, n-1) + '...' : string
    )
  }



  return (

    <header style={{backgroundSize: 'cover', backgroundImage: `url( "https://image.tmdb.org/t/p/original/${ movie?.backdrop_path }" )`, backgroundPosition: 'center center', height: '400px', position: 'relative', objectFit: 'contain'}} >
    
    <div className='content' >

    <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>

    <div>


    <button className='button' >Play</button>
    <button className='button' >List</button>

    </div>

    <p className='description'>{truncate(movie?.overview, 160)}</p>

    </div>




    <div className='netflix-button'/>


    </header>
  )
}
export default NetflixBanner
