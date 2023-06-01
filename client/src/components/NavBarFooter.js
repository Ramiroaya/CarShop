
import React from "react";
import FormContact from "./Contacto";
import '../css/Footer.css';
import Title from "./Title";


const NavBarFooter = () => {
    return(
        <div className="container-footer">
            <ul className="nav-footer">
                <li className="item-footer"><a>Nosotros</a></li>
                <li className="item-footer"><a href={Title}>Legales</a></li>
                <li className="item-footer"><a href={FormContact}>Contacto</a></li>                
            </ul>
        </div>
    )
}
export default NavBarFooter;