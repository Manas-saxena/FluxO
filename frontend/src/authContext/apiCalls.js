import axios from "axios"
import { loginstart,loginfailure,loginsuccess} from "./AuthActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (error)=>{
    toast.error(error,{
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
    progress: undefined,
})}
export const login = async(user,dispatch)=>{
    dispatch(loginstart());
    try {
        const res = await axios.post(
          "http://localhost:8000/api/auth/login",
          user
        );
        dispatch(loginsuccess(res.data));
    } catch (error) {
        notify(error.response.data);
        dispatch(loginfailure());
    }
}