import { PlayArrow ,ThumbUpOutlined,ThumbDownOutlined ,Add} from '@mui/icons-material'
import React,{useState} from 'react'
import "./listItem.scss" 
const ListItem = ({index}) => {
    const [isHovered , setIsHovered] = useState(false);
    const trailer ="https://www.youtube.com/watch?v=SfZWFDs0LxA";
    return (
        <div className='listItem' style={{left: isHovered && index*225 -50 +index*2.5 }} onMouseEnter ={ () => setIsHovered(true)} onMouseLeave={ () => setIsHovered(false)}>
            <img src="https://trustedindian.com/wp-content/uploads/2021/03/indexofseason2.png" alt="" />
                {isHovered && (
                    <>
                    <iframe src="https://www.youtube.com/embed/SfZWFDs0LxA?controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay"></iframe>
                    {/* <video src="https://www.youtube.com/embed/SfZWFDs0LxA?controls=0" autoPlay loop></video> */}
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit"> +16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ad!
                    </div>
                <div className="genre">Action</div>
            </div>
                    </>
                )}
                
        </div>
    )
}

export default ListItem
