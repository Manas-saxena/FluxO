import Topbar from "./component/topbar/Topbar"
import Sidebar from "./component/sidebar/Sidebar"
import Home from "../src/pages/home/Home"
import "./app.css"
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className='container'>
      <Sidebar/>
      <div className="others">
        <Home></Home>
      </div>
      </div>
    </div>
  );
}

export default App;
