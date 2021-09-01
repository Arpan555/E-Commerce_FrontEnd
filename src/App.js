import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          
            <Link exact to ="/" >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link exact to ="/login" >Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link exact to ="/signup" >Signup</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
        </ul>
       
        <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
