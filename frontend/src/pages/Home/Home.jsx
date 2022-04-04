import React ,{useState,useEffect} from 'react'
import Navbar from '../../component/navbar/Navbar'
import Featured from '../../component/featured/Featured'
import List from "../../component/list/List"
import "./home.scss"
import axios from "axios";
import loader from "../../useables/loader.gif"
const Home  = ({type}) => {
    const [lists , setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const [showloader , setShowloader] = useState(false);
    useEffect(() => {
       const getRandomLists = async ()=>{
           setShowloader(true);
           try {
              const jwt = JSON.parse(localStorage.getItem("user")).accessToken;
                
              const res = await axios.get(`http://localhost:8000/api/list${type ? "?type=" + type:""}${genre ? "&genre=" +genre:""}`,{   
                   headers:{
                    token: "Bearer "+jwt
                   }

               })
            //    console.log(res.data);   
                   setTimeout(() => {
                   setShowloader(false);
                       
                   }, 3000);
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
         {showloader?
         <div className='loaderContainer'>
             <img src={loader} className ='loader' alt='loader'></img>
             </div>
         
         :
         <div>
             <Featured type={type} setGenre={setGenre}/>
            
                {lists?.map((list , id)=>(
                    <List list = {list} key = {id}/>
                ))}
         </div>
         
                
        }
            
            
         </div>
    )
}

export default Home;
