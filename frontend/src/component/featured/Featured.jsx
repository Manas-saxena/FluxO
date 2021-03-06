import React,{useEffect , useState} from "react";
import "./featured.scss";
import axios from "axios";
import {Link} from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
const Featured = ({type , setGenre}) => {
  const [content ,setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async() =>{
      try {
        const jwt = JSON.parse(localStorage.getItem("user")).accessToken;
        const res = await axios.get(`http://localhost:8000/api/movies/random?type=${type?type:""}`,{
          headers:{
            token :"Bearer "+jwt
          }
        })
        setContent(res.data[0]);
      } catch (error) {
        console.log(error)
      }
    }
     getRandomContent();
  },[type])
  return (
    <div className="featured">
        {
            type && (
                <div className='category'>
                    <span>{type==='movie' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre"  onChange={e=>setGenre(e.target.value)}>
                        <option value="Adventure">Adventure</option>
                        <option value="Adventure">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="fantasy">fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="horror">horror</option>
                        <option value="romance">romance</option>
                        <option value="sci-fi">sci-fi</option>
                        <option value="thriller">thriller</option>
                        <option value="wester">wester</option>
                        <option value="animation">animation</option>
                        <option value="drama">drama</option>
                        <option value="documentary">documentary</option>

                    </select>
                </div>
            )

        }
      <img
        src={content.img}
        alt="movieimg"
        style={{objectFit:"cover"}}
      />
      <div className="info">
          {/* <h1>{content.title}</h1> */}
          <br />
      <span style={{color:"white"}} className='desc'>
         {content.desc}
      </span>
      <div className="buttons">
        <Link to={{pathname:`/watch/${content._id}` , movie:content}} >
        <button className='play'>
              <PlayArrowIcon/>
              <span>Play</span>
          </button>
        </Link>
          
          <button className='more'>
        <InfoOutlined/>
        <span>Info</span>
          </button>
      </div>
      </div>
    </div>
  );
};

export default Featured;
