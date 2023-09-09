const API_KEY = '2fec081181ddf74f7c70a91a466b1dbe';

const data = {


    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,


    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,

    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,

}

export default data