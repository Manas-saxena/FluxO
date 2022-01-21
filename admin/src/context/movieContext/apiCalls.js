import {
  getMoviesfailure,
  getMoviesstart,
  getMoviessuccess,
  deleteMoviestart,
  deleteMoviesuccess,
  deleteMoviefailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
} from "./movieActions";
import axios from "axios"
export const getMovies = async (dispatch)=>{
   dispatch( getMoviesstart());
    try {
        const res = await axios.get("/movies", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
       
        dispatch(getMoviessuccess(res.data));
    } catch (error) {
       dispatch( getMoviesfailure());
    }
}
export const deleteMovie = async (id , dispatch)=>{
   dispatch( deleteMoviestart());
    try {
       await axios.delete("/movies/"+id, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
       
        dispatch(deleteMoviesuccess(id));
    } catch (error) {
       dispatch( deleteMoviefailure());
    }
}
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};
