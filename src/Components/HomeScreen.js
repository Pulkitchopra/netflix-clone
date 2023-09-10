import React from 'react'

import NetflixRow from './NetflixRow'
import NetflixBanner from './NetflixBanner'
import data from '../NetflixData';

const HomeScreen = () => {
   
  return (

    <div>




    <NetflixBanner/>

    <NetflixRow title = 'Netflix Originals' fetchUrl = { data.fetchNetflixOriginals }  />

    <NetflixRow title = 'Trending Now' fetchUrl = { data.fetchTrending }  />

    <NetflixRow title = 'Top Rated' fetchUrl = { data.fetchTopRated }  />

    <NetflixRow title = 'Action Movies' fetchUrl = { data.fetchActionMovies }  />






    <NetflixRow title = 'Comedy Movies' fetchUrl = { data.fetchComedyMovies }  />
    <NetflixRow title = 'Horror Movies' fetchUrl = { data.fetchHorrorMovies }  />
    <NetflixRow title = 'Romance Movies' fetchUrl = { data.fetchRomanceMovies }  />
    <NetflixRow title = 'Documentaries' fetchUrl = { data.fetchDocumentaries }  />









    </div>

  )
}



export default HomeScreen
