import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import { useLocation } from 'react-router'
import {Link} from "react-router-dom"
import "./watch.scss"
const Watch = ()=> {
    const location = useLocation();
    const {movie} = location;

    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined></ArrowBackOutlined>
                Home
            </div>
            </Link>
            <video className="video" controls>
            <source src={movie.video} type="video/mp4"/>
            </video>
            {/* <video  src={movie.video} className="video" autoPlay onProgress controls></video> */}
        </div>
    )
}

export default Watch;
