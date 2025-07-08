'use client';

import React from 'react';
import Image from 'next/image';
import {
  AboutSection,
  ServicesInfo,
  AboutTextWrap,
  AboutTextInfo,
  AboutTextIcon,
} from './styles';

const About: React.FC = () => {
  return (
    <AboutSection id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <ServicesInfo>
              <h2 className="mb-4">Sobre o Festava 2023</h2>
              <p>
                O Festava Live é o maior festival de música eletrônica da América Latina, reunindo os melhores DJs do mundo em um só lugar. Prepare-se para uma experiência inesquecível.
              </p>
              <h6 className="mt-4">Uma Experiência Única na Vida</h6>
              <p>
                Viva a música, a amizade e momentos que ficarão para sempre na memória.
              </p>
              <h6 className="mt-4">Festa a Noite Inteira</h6>
              <p>Chame seus amigos e venha fazer parte desta celebração. Obrigado!</p>
            </ServicesInfo>
          </div>

          <div className="col-lg-6 col-12">
            <AboutTextWrap>
              <Image
                src="/images/pexels-alexander-suhorucov-6457579.jpg"
                alt="Um momento feliz no festival"
                width={536}
                height={357}
                className="about-image img-fluid"
              />
              <AboutTextInfo className="d-flex">
                <div className="d-flex">
                  <AboutTextIcon className="bi-person"></AboutTextIcon>
                </div>
                <div className="ms-4">
                  <h3>um momento feliz</h3>
                  <p className="mb-0">sua incrível experiência no festival conosco</p>
                </div>
              </AboutTextInfo>
            </AboutTextWrap>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
