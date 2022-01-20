import axios from "axios"
import { loginstart,loginfailure,loginsuccess} from "./AuthActions";
export const login = async(user,dispatch)=>{
    dispatch(loginstart());
    try {
        const res = await axios.post("auth/login",user);
        dispatch(loginsuccess(res.data));
    } catch (error) {
        dispatch(loginfailure());
    }
}