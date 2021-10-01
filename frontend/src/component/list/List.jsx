import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from "../listItem/ListItem";
import React ,{useRef , useState} from 'react'
import "./list.scss";
const List = () => {
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
    return (
        <div className='list'>
            <span className='listtitle'>Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left " onClick={()=>handleclick("left")} ></ArrowBackIosOutlined>
                <div className='listitem' ref={listRef}>
                <ListItem index = {0} ></ListItem>
                <ListItem index = {1}></ListItem>
                <ListItem index = {2}></ListItem>
                <ListItem index = {3}></ListItem>
                <ListItem index = {4}></ListItem>
                <ListItem index = {5}></ListItem>
                <ListItem index = {6}></ListItem>
                <ListItem index = {7}></ListItem>
                <ListItem index = {8}></ListItem>
                <ListItem index = {9}></ListItem>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"  onClick={()=>handleclick("right")} ></ArrowForwardIosOutlined>

            </div>
        </div>
    )
}

export default List
