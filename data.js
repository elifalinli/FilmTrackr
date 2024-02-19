const apiKey = process.env.API_KEY
const categoryArray = [
    {
      title: "Popular",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    },
    {
      title: "Top Rated",
      apiUrl: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Action",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
    },
    {
      title: "Comedy",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
    },
    {
      title: "Best from Bollywood",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_original_language=hi`,
    },
    {
      title: "Horror",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=27`,
    },
    {
      title: "Sci-Fi",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=878&sort_by=vote_count.desc`,
    },
    {
      title: "Crime",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=80`,
    },
  ];
  
  export default categoryArray