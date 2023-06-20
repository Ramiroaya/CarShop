import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Home from '../../pages/Home';



const NavBarHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/ofertas" className="nav-link">
                  Ofertas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/usuario" className="nav-link">
                  Usuario
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/nosotros" className="nav-link">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca Tu Vehiculo"
                aria-label="Busca Tu Vehiculo"
              />
              <Button className="btn-outline-success" type="submit">
                Click
              </Button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
};

export default NavBarHeader;
