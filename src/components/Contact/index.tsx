'use client';

import React, { useState } from 'react';
import {
  ContactSection,
  SectionOverlay,
  ContactForm,
  FormTitle,
  FormInput,
  FormTextarea,
  FormButton,
} from './styles';

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const phoneNumber = '5588997856905';
    const text = `Mensagem do template Festava Live! Meu nome é ${fullName} (${email}). Mensagem: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };
  return (
    <ContactSection id="section_6">
      <SectionOverlay />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <ContactForm
              className="custom-form"
              onSubmit={handleSubmit}
              role="form"
            >
              <FormTitle>Fale Conosco</FormTitle>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <FormInput
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Nome Completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <FormInput
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Endereço de E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <FormTextarea
                name="message"
                rows={5}
                id="message"
                placeholder="Sua Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></FormTextarea>
              <div className="col-lg-5 col-md-10 col-8 mx-auto">
                <FormButton type="submit">Enviar Mensagem</FormButton>
              </div>
            </ContactForm>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
