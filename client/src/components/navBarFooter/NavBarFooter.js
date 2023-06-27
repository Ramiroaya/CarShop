import React from 'react';
import { Link } from "react-router-dom";

import './navBarFooter.css';

const NavBarFooter = () => {
   

    return(
        <div className="container-navBar">
            <ul className="nav-footer">
                <li className="item-footer"><Link to='/nosotros'>Nosotros</Link></li>
                <li className="item-footer"><Link to='/legales'>Terminos y Condiciones</Link></li>
                <li className="item-footer"><Link to='/contacto'>Contacto</Link></li>                
            </ul>
        </div>
    );
};

export default NavBarFooter;