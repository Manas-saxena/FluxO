export const getMoviesstart = () => ({
  type: "GET_MOVIES_START",
});
export const getMoviessuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});
export const getMoviesfailure = () => ({
  type: "GET_MOVIES_FAILURE",
});
export const deleteMoviestart = () => ({
  type: "DELETE_MOVIE_START",
});
export const deleteMoviesuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});
export const deleteMoviefailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
