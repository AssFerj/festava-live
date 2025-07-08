'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

export interface StyledButtonProps {
  variant?: 'primary' | 'secondary';
}

const primaryStyles = css<StyledButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const secondaryStyles = css<StyledButtonProps>`
  background-color: ${({ theme }) => theme.colors.customBtnBg};
  color: ${({ theme }) => theme.colors.pColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.customBtnBgHover};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledButton = styled(Link)<StyledButtonProps>`
  border-radius: ${({ theme }) => theme.radii.large};
  font-size: ${({ theme }) => theme.fontSizes.btn};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  transition: all 0.3s;
  padding: 15px 25px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  ${({ variant }) => (variant === 'secondary' ? secondaryStyles : primaryStyles)}
`;
