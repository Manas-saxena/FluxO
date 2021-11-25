import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from "../listItem/ListItem";
import React ,{useRef , useState} from 'react'
import "./list.scss";
const List = ({list}) => {
        const [slideNumber , setSlideNumber] = useState(0);
         const listRef = useRef();
    const handleclick = (direction ) =>{

            let distance = listRef.current.getBoundingClientRect().x -50;
        if(direction ==="right" && slideNumber<5)
        {
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        
        if(direction ==='left' && slideNumber>0)
        {
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
    }
    console.log(list.length )
    return (
        <div className='list'>
            <span className='listtitle'>{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left " onClick={()=>handleclick("left")} ></ArrowBackIosOutlined>
                <div className='listitem' ref={listRef}>
                {
                    list.content.map((item,i)=>(
                <ListItem key = {i} item ={item} ></ListItem>

    ))
                }
               
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"  onClick={()=>handleclick("right")} ></ArrowForwardIosOutlined>

            </div>
        </div>
    )
}

export default List
