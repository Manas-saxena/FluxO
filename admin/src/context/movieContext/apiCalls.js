import {
  getMoviesfailure,
  getMoviesstart,
  getMoviessuccess,
  deleteMoviestart,
  deleteMoviesuccess,
  deleteMoviefailure,
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
