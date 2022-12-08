import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { stylistics } from 'styles/styles';

export const MainNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin: 12px 0;

  @media (min-width: 768px) {
    margin-top: 40px;
    padding-left: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    padding-left: 16px;
  }
`;

export const Link = styled(NavLink)`
  height: 38px;
  border-radius: 6px;
  background-color: ${stylistics.colors.mainBg};
  transition: 0.3s;

  &.active {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  path {
    transition: fill 300ms linear;
  }

  &:hover path,
  &:focus path,
  &.active path {
    fill: ${stylistics.colors.navIconBg};
  }

  span {
    display: none;
  }

  @media (min-width: 768px) {
    height: 18px;
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      width: 18px;
      height: 18px;
    }

    span {
      display: inline-block;
      font-family: ${stylistics.fonts.heading};
      font-size: ${stylistics.fontSizes.m};
    }

    &.active {
      filter: none;
    }

    &.active span {
      font-weight: 700;
    }
  }
`;