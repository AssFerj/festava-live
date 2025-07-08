import styled from 'styled-components';
import Link from 'next/link';

export const SiteFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const FooterTitle = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.pColor};
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.pColor};
  font-size: 0.8rem;
`;

export const SocialLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.pColor};
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
