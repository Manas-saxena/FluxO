import { PlayArrow ,ThumbUpOutlined,ThumbDownOutlined ,Add} from '@mui/icons-material'
import React,{useState ,useEffect} from 'react'
import "./listItem.scss" 
import axios from 'axios'
import {Link} from "react-router-dom"
const ListItem = ({key ,item}) => {
    let index = key;
    const [isHovered , setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async() =>{
            try {
                const jwt = JSON.parse(localStorage.getItem("user")).accessToken;
                const res = await axios.get("http://localhost:8000/api/movies/find/"+item,{
                headers:{
                    token: "Bearer " + jwt,
                   }
                })
                setMovie(res.data);
            } catch (error) {
               console.log(error); 
            }
        }
        getMovie();
    }, [item])
    return (
        <Link to={{pathname:`/watch/${movie._id}` , movie:movie}}>
        <div className='listItem' style={{left: isHovered && (index*225 -50 +index*2.5) }} onMouseEnter ={ () => setIsHovered(true)} onMouseLeave={ () => setIsHovered(false)}>
            <img src = {movie.img} alt=""/>
                {isHovered && (
                    <>
                    <iframe src={movie.video} allow='autoplay' frameborder="0" ></iframe>
            <div className="itemInfo">
                <div className="icons">
                    <Link  to={{pathname:`/watch/${movie._id}` , movie:movie}} style={{"color":"white"}}> <PlayArrow className="icon"/></Link>
                   
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">{movie.limit}+</span>
                    <span>{movie.year}</span>
                </div>
                <div className="desc" >
                    {movie.desc}
                    </div>
                <div className="genre">{movie.genre}</div>
            </div>
                    </>
                )}
                
        </div>
        </Link>
    )
}

export default ListItem
