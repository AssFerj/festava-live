'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  const [isSticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('#section_1');

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setSticky(offset > 50);

    let currentSection = '';
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href) as HTMLElement;
      if (section) {
        const sectionTop = section.offsetTop;
        if (offset >= sectionTop - 60) {
          currentSection = link.href;
        }
      }
    });

    if (currentSection && currentSection !== activeLink) {
      setActiveLink(currentSection);
    }
  }, [activeLink]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <Brand href="/" className="navbar-brand">Festava Live</Brand>
        
        <Button href="#" className="d-lg-none ms-auto me-4">Comprar Ingresso</Button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <NavLink href={link.href} className='nav-link' $isActive={activeLink === link.href}>
                  {link.name}
                </NavLink>
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
