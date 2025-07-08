'use client';

import styled from 'styled-components';

export const HeroSection = styled.section`
  padding-top: 120px; /* Ajuste para evitar sobreposição da Navbar */
  margin-top: -83px;
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 991.98px) {
    padding-top: 80px;
    margin-top: -62px;
  }
`;

export const SectionOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  opacity: 0.35;
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  padding-bottom: 50px;
`;

export const SmallText = styled.small`
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: 1.5rem;
`;

export const InfoText = styled.h5`
  color: ${({ theme }) => theme.colors.white};
`;

export const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  .social-icon-item {
    display: inline-block;
    margin: 0 5px;
  }

  .social-icon-link {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
  }
`;
