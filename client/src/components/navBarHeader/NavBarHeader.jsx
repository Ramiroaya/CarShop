import { useEffect, useState } from 'react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Header.css';

import logoImage from '../../images/LogoCarShop.png';


const NavBarHeader = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      const isTop = window.scrollY < 100;
      if (navbar) {
        isTop ? navbar.classList.remove('scrolled') : navbar.classList.add('scrolled');
      }
    };
    const storedToken = localStorage.getItem('token');
    console.log(storedToken);

    if (storedToken) {
      setIsLoggedIn(true);
    const storedUserName = localStorage.getItem('nombre');
    console.log(storedUserName);
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="custom-navbar">
        <div className="container">
          <div className="logo-container">
            <NavLink exact to="/" className="nav-link">
              <img src={logoImage} alt="Logo" className="logo-image" />
            </NavLink>
          </div>
          <div className="navbar-nav">
            <ul className="list-unstyled d-flex">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  <span className="fs-5 me-4">Inicio</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/ofertas" className="nav-link">
                  <span className="fs-5 me-4">Ofertas</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/usuario" className="nav-link">
                  <span className="fs-5 me-4">Usuario</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/nosotros" className="nav-link">
                  <span className="fs-5 me-4">Nosotros</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/contacto" className="nav-link">
                  <span className="fs-5 me-4">Contacto</span>
                </NavLink>
              </li>
              {isLoggedIn && (
                <li className='nav-item'>
                  <div className="fs-5 me-1">
                    <p>Hola</p>
                    <p>{userName}</p>
                  </div>
                </li>
              )}
                           
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBarHeader;