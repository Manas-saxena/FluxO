import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from "../listItem/ListItem";
import React ,{useRef} from 'react'
import "./list.scss";
const List = () => {

         const listRef = useRef()
    const handleclick = (direction ) =>{

        if(direction ==="left")
        {
            listRef.current.style.transform = "translateX(-230px)"
        }
    }
    return (
        <div className='list'>
            <span className='listtitle'>Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left " onClick={()=>handleclick("left")} ></ArrowBackIosOutlined>
                <div className='listitem' ref={listRef}>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"  onClick={()=>handleclick("left")} ></ArrowForwardIosOutlined>

            </div>
        </div>
    )
}

export default List
