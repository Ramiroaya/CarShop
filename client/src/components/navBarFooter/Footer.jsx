import React from "react";
import NavBarFooter from './NavBarFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logoImage from '../../images/LogoCarShop.png';

import './Footer.css';
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
      <div className="footer-container">
        <div className="logo-container">
          <NavLink exact to="/" className="nav-link">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </NavLink>
            </div>
            <NavBarFooter/>
            <div className = 'iconos-footer'>
              <h2 ><a className='icon' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></h2>
              <h2 ><a className='icon'href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></h2>
            </div>
        </div>
    )
}
export default Footer