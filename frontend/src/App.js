import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="brand-button" onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">Amazing Webshop</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Shopping Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3 className="shopping-categories-title">Shopping Categories</h3>
          <ul className="shopping-categories-list">
            <li>
              <a href="index.html">Chutneys</a>
            </li>
            <li>
              <a href="index.html">Oils</a>
            </li>
            <li>
              <a href="index.html">Oils</a>
            </li>
            <li>
              <a href="index.html">Spices</a>
            </li>
            <li>
              <a href="index.html">Rice</a>
            </li>
            <li>
              <a href="index.html">Flour</a>
            </li>
          </ul>
          <button onClick={closeMenu} className="button-close-sidebar">
            Close
          </button>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            
          </div>
        </main>

        <footer className="footer">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
