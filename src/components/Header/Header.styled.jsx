import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: ${stylistics.colors.mainBg};

  @media (min-width: 768px) {
    padding: 20px 32px;
  }

  @media (min-width: 1280px) {
    padding: 20px 18px;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Username = styled.span`
  position: relative;
  margin-right: 8px;
  font-family: ${stylistics.fonts.body};
  font-size: ${stylistics.fontSizes.m};
  color: ${stylistics.colors.secondaryText};

  @media (min-width: 768px) {
    margin-right: 24px;

    ::after {
      content: '';
      position: absolute;
      top: -5px;
      display: inline-block;
      margin-left: 12px;
      width: 1px;
      height: 30px;
      background-color: ${stylistics.colors.secondaryText};
    }
  }
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  @media (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

export const Logout = styled.img`
  width: 18px;
  height: 18px;
`;

export const LogoutText = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-family: ${stylistics.fonts.body};
    font-size: ${stylistics.fontSizes.m};
    color: ${stylistics.colors.secondaryText};
  }
`;
