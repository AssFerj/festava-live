import styled from 'styled-components';

export const ScheduleSection = styled.section`
  background-image: url('/images/nainoa-shizuru-unsplash-blur.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1.5rem;
`;

export const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const TableHeading = styled.th`
  padding: 20px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 767.98px) {
    display: block;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: ${({ theme }) => theme.radii.medium};
    overflow: hidden;
  }
`;

export const TableCell = styled.td<{
  $isDate?: boolean;
}>`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  vertical-align: top;
  font-weight: ${({ $isDate, theme }) =>
    $isDate ? theme.fontWeights.bold : 'normal'};

  @media (max-width: 767.98px) {
    display: block;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding-left: 120px; /* Ajustado para evitar quebra de layout */
    position: relative;
    text-align: right;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      text-align: left;
      white-space: nowrap;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const HiddenTableCell = styled.td<{
  $isDate?: boolean;
}>`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  vertical-align: top;
  font-weight: ${({ $isDate, theme }) =>
    $isDate ? theme.fontWeights.bold : 'normal'};
`;

export const ScheduleThumb = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const ScheduleInfo = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }

  p {
    color: ${({ theme }) => theme.colors.pColor};
  }
`;

export const SpeakerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const SpeakerImage = styled.div`
  .speaker-image {
    border-radius: ${({ theme }) => theme.radii.large};
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

export const SpeakerName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: 10px;
`;
