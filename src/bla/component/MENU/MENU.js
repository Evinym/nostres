import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  
const Menus = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/burgers">Burgers</Link>
        </li>
        <li>
          <Link to="/boissons">Boissons</Link>
        </li>
        <li>
          <Link to="/pacs">Pacs-Sp</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/burgers" component={Burgers} />
      <Route path="/boissons" component={Boissons} />
      <Route path="/pacs" component={Pacs} />
    </div>
  </Router>
);

const Burgers = () => (
  <div>
    <h2>Blaise1</h2>
  </div>
);
const Boissons = () => (
  <div>
    <h2>Blaise2</h2>
  </div>
);
const Pacs = () => (
  <div>
    <h2>Blaise3</h2>
  </div>
);

export default Menus;