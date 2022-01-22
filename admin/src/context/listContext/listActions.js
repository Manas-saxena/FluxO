export const getlistsstart = () => ({
  type: "GET_LISTS_START",
});
export const getlistssuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});
export const getlistsfailure = () => ({
  type: "GET_LISTS_FAILURE",
});
export const deleteListstart = () => ({
  type: "DELETE_LIST_START",
});
export const deleteListsuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});
export const deleteListfailure = () => ({
  type: "DELETE_LIST_FAILURE",
});

export const createListStart = () => ({
  type: "CREATE_List_START",
});

export const createListSuccess = (list) => ({
  type: "CREATE_List_SUCCESS",
  payload: list,
});

export const createListFailure = () => ({
  type: "CREATE_List_FAILURE",
});
// export const updateMovieStart = () => ({
//   type: "CREATE_MOVIE_START",
// });

// export const updateMovieSuccess = (movie) => ({
//   type: "CREATE_MOVIE_SUCCESS",
//   payload: movie,
// });

// export const updateMovieFailure = () => ({
//   type: "CREATE_MOVIE_FAILURE",
// });