'use client';

import styled from 'styled-components';

export const PricingSection = styled.section`
  background-color: ${({ theme }) => theme.colors.sectionBg};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

export const PricingPlan = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 3px dotted ${({ theme }) => theme.colors.dark};
  padding: 40px;
  margin-bottom: 30px;
  text-align: center;
`;

export const PricingHeader = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const PricingPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.h5};
    color: ${({ theme }) => theme.colors.dark};
    margin-left: 5px;
  }
`;

export const PricingBody = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }

  li {
    color: ${({ theme }) => theme.colors.pColor};
    padding: 5px 0;
  }
`;

export const PricingFooter = styled.div`
  .ctaBtn {
    color: ${({ theme }) => theme.colors.white};
  }
`;
