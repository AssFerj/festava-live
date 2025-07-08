'use client';

import styled from 'styled-components';

export const ArtistsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.sectionBg};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

export const ArtistsHover = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.radii.medium};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s;
  padding: 20px;

  p {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 5px;
  }

  hr {
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ArtistsThumb = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  border-radius: ${({ theme }) => theme.radii.medium};

  &:hover ${ArtistsHover} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ArtistsImageWrap = styled.div`
  .artists-image {
    border-radius: ${({ theme }) => theme.radii.medium};
    display: block;
    width: 100%;
    height: auto;
  }
`;
