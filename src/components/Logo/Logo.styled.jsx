import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const LogoIcon = styled.img`
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoTitle = styled.span`
  font-family: ${stylistics.fonts.heading};
  font-weight: 700;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
