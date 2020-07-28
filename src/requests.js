const API_KEY = '5b737e7dba38f0eaf9ff624ac37e680f';

const requests = {
    fetchTrending: '/trending/all/week?api_key=5b737e7dba38f0eaf9ff624ac37e680f&language=en-US',
    fetchTopRated: '/movie/top_rated?api_key=5b737e7dba38f0eaf9ff624ac37e680f&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=5b737e7dba38f0eaf9ff624ac37e680f&with_networks=213',
    fetchActionMovies: '/discover/movie?api_key=5b737e7dba38f0eaf9ff624ac37e680f&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=5b737e7dba38f0eaf9ff624ac37e680f&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=5b737e7dba38f0eaf9ff624ac37e680f&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=5b737e7dba38f0eaf9ff624ac37e680f&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=5b737e7dba38f0eaf9ff624ac37e680f&with_genres=99',
}

export default requests;