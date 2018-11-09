import React, { Component } from 'react';
import './Mentionslegal.css';
import Footer from './Footer';


class Mentionslegal extends Component {

  render() {
    return (
      <div>
        <div className="Legal-Notice">
          <div className="Container-Info">
              <h1 className="Title-lign">Mentions Légales</h1>
              <div className="Block-Info">
                <h3 className="Container-LégalNotice">Galante Burger</h3>     
                <p className="Info-Business">Le site galanteburger.com est édité par :</p>
                <p className="Info-Business"><b>Galante Burgers</b></p>
                <p className="Info-Business">Marie Galante Centre</p>
                <p className="Info-Business">Galante Burger est un source qui conçoit des Burgers.</p>
                <p className="Info-Business"><b>Adresse de l'établissement :</b></p>
                <p className="Info-Business"><b>Téléphone:</b> 0690 9.. ...</p>
                <p className="Info-Business"><b>Email:</b> galanteburger@gmail.com</p>
                <p className="Info-Business"><b>Le Directeur de cette publication est </b></p>
                <p>GB. </p>
     
                <hr size="1" align="left" width="60%" color="black" ></hr>
  
                <h3 className="Container-LégalNotice">Hébergement</h3>     
                <p className="Info-Business">Le site Galante-Burger est hébergé par : </p>
                <p className="Info-Business">Github</p>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Mentionslegal;
