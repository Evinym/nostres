import React, { Component } from 'react';
import '../../App.css';
import './temp.css';
import logo from '../../images/kol.png';


class Header extends Component {
  render() {
    return (
      <div className="el-tien">
        <header className="the-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Woos kann
          </h1>
          <nav>
            <input type="button" value="accueil" className="Buttons"/>
            <input type="button" value="menu" className="Buttons"/>
            <input type="button" value="About" className="Buttons"/>
        </nav>
        </header>

      </div>
    );
  }
}

export default Header;