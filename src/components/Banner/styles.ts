import Link from 'next/link';
import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const BannerContent = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.h2};  
`;

export const BannerText = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const SocialLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding: 15px;
  border-radius: ${({ theme }) => theme.radii.large};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s;
  }
`;