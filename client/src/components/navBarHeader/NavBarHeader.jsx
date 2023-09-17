import { useEffect } from 'react';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Header.css';
import logoImage from '../../images/logogrande.png'; // Importa la imagen que deseas utilizar

const NavBarHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const isTop = window.scrollY < 100;
      if (navbar) {
        isTop ? navbar.classList.remove('scrolled') : navbar.classList.add('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
        <div className="container-fluid">
          <div className="row align-items-center"> {/* Utiliza una fila para alinear la imagen y el contenido */}
            <div className="col-auto">
              {/* Agrega la imagen a la izquierda */}
              <img src={logoImage} alt="Logo" className="logo-image" />
            </div>
            <div className="col">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col">
              <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBarHeader;