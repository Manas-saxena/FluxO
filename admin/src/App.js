
import {useContext} from "react"
import {AuthContext} from "./context/authContext/AuthContext"
import Topbar from "./component/topbar/Topbar"
import Sidebar from "./component/sidebar/Sidebar"
import Home from "../src/pages/home/Home"
import UserList from "../src/pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import Login from "./pages/login/Login"
import NewProduct from "./pages/newProduct/NewProduct"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./app.css"
function App() {
 const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/"></Redirect> : <Login></Login>}
        </Route>

        {(user && (
          <>
            <Topbar></Topbar>
            <div className="container">
              <Sidebar />

              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/user" exact>
                <UserList></UserList>
              </Route>
              <Route path="/user/:userId" exact>
                <User></User>
              </Route>
              <Route path="/newuser" exact>
                <NewUser></NewUser>
              </Route>
              <Route path="/movies" exact>
                <ProductList></ProductList>
              </Route>
              <Route path="/product/:productId" exact>
                <Product></Product>
              </Route>
              <Route path="/newproduct" exact>
                <NewProduct></NewProduct>
              </Route>
            </div>
          </>
        )) || <Redirect to="/login"></Redirect>}
      </Switch>
    </Router>
  );
}

export default App;
