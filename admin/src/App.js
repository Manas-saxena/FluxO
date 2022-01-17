import Topbar from "./component/topbar/Topbar"
import Sidebar from "./component/sidebar/Sidebar"
import Home from "../src/pages/home/Home"
import UserList from "../src/pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css"
function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/user" exact element={<UserList></UserList>} />
          <Route path="/user/:userId" exact element={<User></User>} />
          <Route path="/newuser" exact element={<NewUser></NewUser>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
