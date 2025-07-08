'use client';

import styled from 'styled-components';

export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ServicesInfo = styled.div`
  h2,
  h6,
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const AboutTextWrap = styled.div`
  position: relative;
`;

export const AboutTextInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.medium};
  position: absolute;
  bottom: 50px;
  right: 50px;
  padding: 30px;
`;

export const AboutTextIcon = styled.i`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.large};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  display: inline-block;
`;
