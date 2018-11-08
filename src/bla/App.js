import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

const App = () => (

    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>

);

export default App;