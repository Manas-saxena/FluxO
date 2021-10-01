import React from "react";
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
const Featured = ({type}) => {
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
        src="https://wallpapers-hub.art/wallpaper-images/240159.jpg"
        alt="movieimg"
      />
      <div className="info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          <br />
      <span style={{color:"white"}} className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error qui porro illum, ea vitae id molestiae adipisci maxime praesentium optio, placeat dolores. Tempora doloremque provident veritatis, alias sint odit!
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
