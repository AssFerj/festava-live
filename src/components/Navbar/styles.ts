'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  background: transparent;
  z-index: 9;
  position: absolute;
  top: 51px; /* From .site-header height */
  right: 0;
  left: 0;
  transition: all 0.3s;

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
    margin-top: 0;
  }
`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.p};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  position: relative;
  border-radius: ${({ theme }) => theme.radii.large};
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:visited {
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary : theme.colors.white};
  }
`;
