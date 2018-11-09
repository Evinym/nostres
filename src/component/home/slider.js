import React, { Component } from 'react';
import logo from '../../images/kol.png';


class Header extends Component {
  render() {
    return (
      <div className="ContainerJGB">  
        <div className="slider-contain">
          <div className="slider-container">
            <div className="slider-div">
              1<img src={logo} className="slider-images" alt="logo" />
            </div>
            <div className="slider-div">
              2<img src={logo} className="slider-images" alt="logo" />
            </div>
            <div className="slider-div">
              3<img src={logo} className="slider-images" alt="logo" />
            </div>
            <div className="slider-div">
              4<img src={logo} className="slider-images" alt="logo" />
            </div>
            <div className="slider-div">
              5<img src={logo} className="slider-images" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;