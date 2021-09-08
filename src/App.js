import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// * React Router
import { Switch, Route } from 'react-router-dom'

// * components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';



function App() {
  return (
    <React.Fragment>

      {/* EXCLUDE NAVBAR :
        to be displayed all over Pages
       */}
      <Navbar />

      <Switch>
        {/* Home Component */}
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />

        {/* 404 Page  */}
        <Route component={Default} />
      </Switch>

    </React.Fragment>
  );
}

export default App;