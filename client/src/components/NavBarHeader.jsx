import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contacto from './Contacto';
import Button from 'react-bootstrap/Button';
import Login from '../pages/Login';
import Ofertas from './Ofertas';
import Nosotros from './Nosotros';
import index from '../index';


const NavBarHeader = () => {
  return (
    <BrowserRouter>
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
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  Ofertas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/usuario" className="nav-link">
                  Usuario
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                  Contacto
                </Link>
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
      <Routes>
        <Route path="/" element={<index/> } />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/usuario" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
};

export default NavBarHeader;


