import { PlayArrow ,ThumbUpOutlined,ThumbDownOutlined ,Add} from '@mui/icons-material'
import React,{useState ,useEffect} from 'react'
import "./listItem.scss" 
import axios from 'axios'
import {Link} from "react-router-dom"
const ListItem = ({key ,item}) => {
    const index = key;
    const [isHovered , setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async() =>{
            try {
                const res = await axios.get("http://localhost:8000/api/movies/find/"+item,{
                headers:{
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzNlMTQxN2NlNzcwNDZhMDk4ZTQ1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTcwMTc2NywiZXhwIjoxNjM2MTMzNzY3fQ.GQjzU7A8jdvIY5OpjtAdSGOvT908dhJP2uyNES_vEIc"
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
        <div className='listItem' style={{left: isHovered && index*225 -50 +index*2.5 }} onMouseEnter ={ () => setIsHovered(true)} onMouseLeave={ () => setIsHovered(false)}>
            <img src = {movie.img} alt="" />
                {isHovered && (
                    <>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qRESnWFYYho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <iframe title="vimeo-player" src="https://youtu.be/qRESnWFYYho" width="640" height="360" frameborder="0" allowfullscreen></iframe> */}
                    {/* <iframe src={movie.trailer} title="YouTube video player" frameborder="0" allow="autoplay"></iframe> */}
                    {/* <video src="https://www.youtube.com/embed/SfZWFDs0LxA?controls=0" autoPlay loop></video> */}
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">{movie.limit}+</span>
                    <span>{movie.year}</span>
                </div>
                <div className="desc">
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
