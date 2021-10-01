import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import "./watch.scss"
function watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined></ArrowBackOutlined>
                Home
            </div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lHJp_3g2MAI?rols=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <video src="https://www.youtube.com/video/lHJp_3g2MAI" className="video" autoPlay onProgress controls></video> */}
        </div>
    )
}

export default watch
