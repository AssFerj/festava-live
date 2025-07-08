'use client';

import React from 'react';
import Button from '@/components/Button';
import { Nav, Brand, NavLink } from './styles';

const navLinks = [
  { name: 'Início', href: '#section_1' },
  { name: 'Sobre', href: '#section_2' },
  { name: 'Artistas', href: '#section_3' },
  { name: 'Programação', href: '#section_4' },
  { name: 'Preços', href: '#section_5' },
  { name: 'Contato', href: '#section_6' },
];

const Navbar: React.FC = () => {

  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container">
        <Brand href="/" className="navbar-brand">Festava Live</Brand>
        

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
          <Button href="#" className="d-lg-block d-none">Comprar Ingresso</Button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
