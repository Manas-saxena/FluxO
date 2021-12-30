import React,{useEffect , useState} from "react";
import "./featured.scss";
import axios from "axios";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
const Featured = ({type}) => {
  const [content ,setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async() =>{
      try {
        const res = await axios.get(`http://localhost:8000/api/movies/random?type=${type?type:""}`,{
          headers:{
            token :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzNlMTQxN2NlNzcwNDZhMDk4ZTQ1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODcyNjEyOCwiZXhwIjoxNjM5MTU4MTI4fQ.M12q1gelMeHEjsHUe-XrXzljODCOdoeFM18IQ9OQmtk"
          }
        })
        setContent(res.data[0]);
      } catch (error) {
        console.log(error)
      }
    }
     getRandomContent();
  },[])
  return (
    <div className="featured">
        {
            type && (
                <div className='category'>
                    <span>{type==='movie' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option value="Adventure">Adventure</option>
                        <option value="Adventure">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="fantasy">fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="horror">horror</option>
                        <option value="romance">romance</option>
                        <option value="sci-fi">sci-fi</option>
                        <option value="thirller">thirller</option>
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
        
      />
      <div className="info">
          {/* <img src={content.imgTitle} alt="imgtitle" /> */}
          <br />
      <span style={{color:"white"}} className='desc'>
         {content.desc}
      </span>
      <div className="buttons">
          <button className='play'>
              <PlayArrowIcon/>
              <span>Play</span>
          </button>
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
