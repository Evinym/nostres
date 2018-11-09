import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import logo from '../images/kol.png';

import Home from './home/home';
import Menus from './menu/menus';
import About from './about/about';
import Mentionslegal from './home/Mentionslegal';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="el-tien">
          <header className="the-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Woos kann
            </h1>
            <nav>
              <Link to="/"><input type="button" value="accueil" className="Buttons"/></Link>
              <Link to="/the-menu"><input type="button" value="menu" className="Buttons"/></Link>
              <Link to="/about"><input type="button" value="About" className="Buttons"/></Link>
            </nav>
          </header>

            <div>
              <Route exact path="/" component={Home} />
              <Route path="/the-menu" component={Menus} />
              <Route path="/about" component={About} />
              <Route path="/Mentionslegales" component={Mentionslegal} />
            </div>
        </div>
      </Router>
    );
  }
}

export default Header; 