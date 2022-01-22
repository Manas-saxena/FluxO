import {
getlistsstart,
getlistssuccess,
getlistsfailure,
deleteListstart,
deleteListsuccess,
deleteListfailure,
createListStart,
createListSuccess,
createListFailure,
} from "./listActions";
import axios from "axios"
export const getLists = async (dispatch)=>{
   dispatch( getlistsstart());
    try {
        const res = await axios.get("/list", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
       
        dispatch(getlistssuccess(res.data));
    } catch (error) {
       dispatch( getlistsfailure());
    }
}
export const deleteList = async (id , dispatch)=>{
   dispatch( deleteListstart());
    try {
       await axios.delete("/list/"+id, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
      //  console.log(id);
        dispatch(deleteListsuccess(id));
    } catch (error) {
       dispatch( deleteListfailure());
    }
}
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/list", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};
