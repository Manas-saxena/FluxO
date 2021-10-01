import Navbar from '../../component/navbar/Navbar'
import Featured from '../../component/featured/Featured'
import List from "../../component/list/List"
import "./home.scss"

const Home  = () => {
    return (
        <div className='home'>
         <Navbar></Navbar>
            <Featured/>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
         </div>
    )
}

export default Home
