import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jumbo from './Jumbotron';
import Slider from './slider';
import Footer from './Footer';

import '../../App.css';

const Home = () => (
    <div>
      <Jumbo/>
      <br/>
      <Slider/>
      <Footer/>
    </div>
  );
  
  export default Home;