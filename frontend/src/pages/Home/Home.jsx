import React ,{useState,useEffect} from 'react'
import Navbar from '../../component/navbar/Navbar'
import Featured from '../../component/featured/Featured'
import List from "../../component/list/List"
import "./home.scss"
import axios from "axios";
const Home  = ({type}) => {
    const [lists , setLists] = useState([]);
    const [genre, setGenre] = useState(null);
   
    useEffect(() => {
       const getRandomLists = async ()=>{
           try {
               
               const res = await axios.get(`http://localhost:8000/api/list${type ? "?type=" + type:""}${genre ? "&genre=" +genre:""}`,{   
                   
                   headers:{
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzNlMTQxN2NlNzcwNDZhMDk4ZTQ1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTcwMTc2NywiZXhwIjoxNjM2MTMzNzY3fQ.GQjzU7A8jdvIY5OpjtAdSGOvT908dhJP2uyNES_vEIc"
                   }

               })
               console.log(res.data);   
                   setLists(res.data);
            } catch (error) {
               console.log(error);
           }
       }
         getRandomLists();
    },[type,genre])
  
    return (
        <div className='home'>
         <Navbar></Navbar>
            <Featured type={type}/>
            {
                lists.map((list , id)=>(
                    <List list = {list} key = {id}/>
                ))
            }
         </div>
    )
}

export default Home;
