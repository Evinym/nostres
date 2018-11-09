import React, { Component } from 'react';
import lambi from '../../images/kol.png'
import fond from '../../images/kol.png' 


const divStyle = {
  backgroundImage: `url(${fond})`,
  backgroundSize:'cover',
  backgroundColor:'rgb(128, 118, 118)',
  filter: 'brightness(90%)',
  width: "100%",
  paddingTop: '3em'
 }
class App extends Component {
  render() {
    return (
      <div className="ContainerJGB">
        <div className="jumboJGB" style={divStyle}>
          <h1 id="TitreJGB">galante - burger</h1>
          <blockquote id="SousTitreJGB">"De nouvelles saveurs..."<br/>
          </blockquote>
          <p className="Jumbo-Author"> Pour le plaisire de vos papilles... </p>
        </div>
        <img src={lambi} alt="logo" className="imgJGB"/>
        <h1>QUI SOMMES-NOUS ?</h1>
        <p> Dans le cadre du concours « stop la faim » se présente :</p>
        <p>«  GALANTE BURGER  »</p>
        <p> burger, boissons, création, production, echange...</p>
      </div>
    );
  }
}

export default App;
