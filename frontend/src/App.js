import React from 'react';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

import './App.css';

function App() {

  function openMenu() {
    document.querySelector(".sidebar").classList.add("open");
  }
  function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <BrowserRouter>
   
      <div className="grid-container"> 
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">Jose Shop</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>

        <main className="main"> 
            <div className="content">
              <Route path="/products/:id" component={ProductScreen} />
              <Route path="/" exact={true} components={HomeScreen} />
          
            </div>

        </main>
        <footer className="footer">
            All rights reserved
        </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
