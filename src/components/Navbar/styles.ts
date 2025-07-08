'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  background-color: transparent !important;
  /* The navbar is now part of the normal page flow and will scroll with it. */
  width: 100%;
  z-index: 999;
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
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  &:visited {
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary : theme.colors.white};
  }
`;
