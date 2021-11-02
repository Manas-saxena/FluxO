import './App.scss';
import {BrowserRouter as Router, Switch , Redirect ,Route} from "react-router-dom";
import Register from './component/register/Register';
import Login from './component/login/Login';
import Home from './pages/Home/Home';
import Watch from './pages/watch/Watch'
function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home></Home> : <Redirect to="/register"></Redirect>}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/"></Redirect>}
        </Route>
        {(user && (
          <>
            <Route path="/movies">
              <Home type="movie"></Home>
            </Route>
            <Route path="/series">
              <Home type="series"></Home>
            </Route>
            <Route path="/watch/:id">
              <Watch></Watch>
            </Route>
          </>
        )) || <Redirect to="/"></Redirect>}
      </Switch>
    </Router>
  );
}

export default App
