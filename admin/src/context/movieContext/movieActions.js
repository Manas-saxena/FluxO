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

export const createMovieStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});

export const createMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});
export const updateMovieStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});

export const updateMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});