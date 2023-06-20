
import React, { useState, useEffect } from "react";
import Contacto from "../Contacto";
import './Footer.css';
import Title from "../login/Title";
import { NavLink } from "react-router-dom";

const NavBarFooter = () => {
    const [legalText, setLegalText] = useState("");

    useEffect(() => {
        const fetchLegalText = async () => {
            try {
                const response = await fetch("../Txt/legalText.txt");
                const text = await response.text();
                setLegalText(text);
            } catch (error) {
                console.error("Error fetching legal text:", error);
            }
        };

        fetchLegalText();
    }, []);

    return(
        <div className="container-footer">
            <ul className="nav-footer">
                <li className="item-footer"><NavLink to='/nosotros'>Nosotros</NavLink></li>
                <li className="item-footer"><a href="Title text={legalText}">Legales</a></li>
                <li className="item-footer"><a href="FormContact">Contacto</a></li>                
            </ul>
        </div>
    );
};

export default NavBarFooter;