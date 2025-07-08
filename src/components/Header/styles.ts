'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const CustomIcon = styled.i`
  color: ${({ theme }) => theme.colors.secondary};
`;
