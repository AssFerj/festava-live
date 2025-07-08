'use client';

import React from 'react';
import {
  SiteFooter,
  FooterTitle,
  FooterText,
  CopyrightText,
  SocialLink,
} from './styles';

const Footer: React.FC = () => {
  return (
    <SiteFooter>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 pb-2">
            <FooterTitle className="site-footer-title mb-3">Links</FooterTitle>
            <ul className="site-footer-links list-unstyled d-flex gap-4">
              <li className="site-footer-link-item">
                <SocialLink href="#section_1">Início</SocialLink>
              </li>
              <li className="site-footer-link-item">
                <SocialLink href="#section_2">Sobre</SocialLink>
              </li>
              <li className="site-footer-link-item">
                <SocialLink href="#section_3">Artistas</SocialLink>
              </li>
              <li className="site-footer-link-item">
                <SocialLink href="#section_4">Programação</SocialLink>
              </li>
              <li className="site-footer-link-item">
                <SocialLink href="#section_5">Preços</SocialLink>
              </li>
              <li className="site-footer-link-item">
                <SocialLink href="#section_6">Contato</SocialLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <FooterTitle className="site-footer-title mb-3">Tem alguma dúvida?</FooterTitle>
            <FooterText className="text-white d-flex mb-1">
              <SocialLink href="tel: 090-080-0760" className="site-footer-link">
                090-080-0760
              </SocialLink>
            </FooterText>
            <FooterText className="text-white d-flex">
              <SocialLink href="mailto:hello@company.com" className="site-footer-link">
                hello@company.com
              </SocialLink>
            </FooterText>
          </div>

          <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
            <FooterTitle className="site-footer-title mb-3">Localização</FooterTitle>
            <FooterText className="text-white d-flex mt-3">
              Sambódromo da Marquês de Sapucaí, Rio de Janeiro, Brasil
            </FooterText>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom mt-5 border-top border-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mt-5">
              <CopyrightText className="copyright-text">
                Copyright © 2023 Festava Live Company
              </CopyrightText>
            </div>
            <div className="col-lg-8 col-12 mt-lg-5">
              <ul className="site-footer-links list-unstyled d-flex flex-wrap">
                <li className="site-footer-link-item me-4">
                  <SocialLink href="#">Termos &amp; Condições</SocialLink>
                </li>
                <li className="site-footer-link-item me-4">
                  <SocialLink href="#">Política de Privacidade</SocialLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteFooter>
  );
};

export default Footer;
