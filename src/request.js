export const api_key="f9dccc2bb95ded95a527497fb023dd8b"
const requests={
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
}

export default requests;