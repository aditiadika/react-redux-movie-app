export const GET_MOVIES = "GET_MOVIES";

export function getMovies() {
  return async function(dispatch) {
    const api = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c1593a564f54f40619768a13410661be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const movies = await api.json();
    return dispatch({
      type: "GET_MOVIES",
      data: movies.results
    });
  };
}
