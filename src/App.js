import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Logout from "./Components/Logout"
import Addcart from "./Components/Addcart"
import Cart from "./Components/Cart"
import ProductPage from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";
import Publicroute from "./Components/Publicroute";
import Privateroute from "./Components/Privateroute";
import Checkout from "./Components/Checkout"
import {useSelector} from "react-redux"
function App() {
   const token = useSelector(state =>state.register.token)
    return (
    <>
      <BrowserRouter>
          <Route>
          <Link exact to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link exact to="/getcart">Cart</Link>
          
          {token ?
            <ul>
              <li><Link exact to="/logout">Logout</Link></li>
              
            </ul>
            :
            <ul>
              <li><Link exact to="/login">Login</Link></li>
              <li><Link exact to="/signup">Signup</Link></li>
              
            
            </ul>}
          </Route>
          <Switch>
              <Route path="/" exact component={ProductPage}/>
              <Route path="/product/:productId" component={ProductDetails} exact/>
              <Route path="/addcart" component={Addcart} exact/>
              <Route path="/getcart" component={Cart} exact/>
              
              <Publicroute path="/signup" component={Signup}  exact/>
              <Publicroute path="/login" component={Login} exact/>
              <Privateroute path="/buynow" component={Checkout} exact/>
              <Privateroute path="/logout" exact component={Logout} exact/>
              <Privateroute path="/checkout" exact component={Checkout} exact/>
              
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
