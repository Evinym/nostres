import React, { Component } from 'react';
import '../../App.css';
import logo from '../../images/kol.png';


class Header extends Component {
  render() {
    return (
      <div className="el-tien">
        <header className="the-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Wait <code>src/Time.no-time</code> and no wait.
          </p>
        </header>
      </div>
    );
  }
}

export default Header;