'use client';

import styled from 'styled-components';

export const ContactSection = styled.section`
  background-image: url('/images/nicholas-green-unsplash-blur.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const SectionOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  opacity: 0.85;
`;

export const ContactForm = styled.form`
  position: relative;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: 40px;
`;

export const FormTitle = styled.h3`
  margin-bottom: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const FormInput = styled.input`
  background-color: ${({ theme }) => theme.colors.sectionBg};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.pColor};
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.pColor};
  }
`;

export const FormTextarea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.sectionBg};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.pColor};
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;
  min-height: 150px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.pColor};
  }
`;

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  border: 0;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.btn};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 15px 25px;
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
