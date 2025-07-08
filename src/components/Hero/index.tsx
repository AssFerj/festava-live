'use client';

import React from 'react';
import Button from '@/components/Button';
import {
  HeroSection,
  SectionOverlay,
  Video,
  Container,
  SmallText,
  Title,
  InfoText,
  SocialIcons,
} from './styles';

const Hero: React.FC = () => {
  return (
    <HeroSection id="section_1">
      <SectionOverlay />
      <Video autoPlay loop muted poster="">
        <source src="/video/pexels-2022395.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </Video>
      <Container className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <SmallText>Festava Live Apresenta</SmallText>
            <Title>Noite ao Vivo 2023</Title>
            <Button href="#section_2" className="smoothscroll">
              Vamos começar
            </Button>
          </div>
          <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
            <div className="date-wrap">
              <InfoText>
                <i className="custom-icon bi-clock me-2"></i>
                10 - 12 de Dezembro, 2023
              </InfoText>
            </div>
            <div className="location-wrap mx-auto py-3 py-lg-0">
              <InfoText>
                <i className="custom-icon bi-geo-alt me-2"></i>
                Centro Nacional, Estados Unidos
              </InfoText>
            </div>
            <div className="social-share">
              <SocialIcons className="social-icon d-flex align-items-center justify-content-center">
                <span className="text-white me-3">Compartilhe:</span>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link">
                    <span className="bi-facebook"></span>
                  </a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link">
                    <span className="bi-twitter"></span>
                  </a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link">
                    <span className="bi-instagram"></span>
                  </a>
                </li>
              </SocialIcons>
            </div>
          </div>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Hero;
