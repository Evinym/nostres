import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

import Home from './HOME/HOME';
import Menus from './MENU/MENU';
import About from './ABOUT/ABOUT';

const Body = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/the-menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/the-menu" component={Menus} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Body;