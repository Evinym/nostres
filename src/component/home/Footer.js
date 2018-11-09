import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    showTop = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (            
                <div className="Footer">
                    <footer className="contenu">
                        <div className="mail-footer">galanteburger@gmail.com</div>
                        <div className="tel-footer"> 0690 9. .. ..</div>
                    </footer>
                    <div className="foot-contain2">
                        <div>
                            <p>Made with love by Galate Burger</p>
                        </div>
                        <div>
                            <NavLink to="/MentionsLegales" onClick={this.showTop} className="foot-link">Mentionslégales</NavLink>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Footer;