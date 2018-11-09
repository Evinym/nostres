import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../App.css';

import Burger from './burger';
import Boisson from './boisson';
import Pacs from './tol.1';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="el-tien">
          <header className="the-header">
            <nav>
              <Link to="/"><input type="button" value="Burger" className="Buttons"/></Link>
              <Link to="/boisson"><input type="button" value="Boisson" className="Buttons"/></Link>
              <Link to="/pacs"><input type="button" value="Pacs" className="Buttons"/></Link>
            </nav>
          </header>

            <div>
              <Route exact path="/" component={Burger} />
              <Route path="/boisson" component={Boisson} />
              <Route path="/pacs" component={Pacs} />
            </div>
        </div>
      </Router>
    );
  }
}

export default Header;