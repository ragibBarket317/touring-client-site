import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import AuthSupply from './context/AuthSupply';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrder from './components/MyOrder/MyOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';
import AddService from './components/AddService/AddService';

function App() {
  return (
    <div>
      <AuthSupply>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">

            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthSupply>
    </div>
  );
}

export default App;
