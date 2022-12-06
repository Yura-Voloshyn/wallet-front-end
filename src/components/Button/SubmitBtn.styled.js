import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { stylistics } from '../../styles/styles';

export const Button = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  min-width: 280px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid ${stylistics.colors.leisureExpens};
  border-radius: 20px;
  font-family: ${stylistics.fonts.body};
  font-style: normal;
  font-weight: ${stylistics.fontWeights.normal};
  font-size: ${stylistics.fontSizes.m};
  line-height: ${stylistics.lineHeights.body};
  letter-spacing: 0.1em;
  color: ${stylistics.colors.lightTextBtn};
  background-color: ${stylistics.colors.primaryBgBtn};
  :disabled {
    opacity: 0.5;
    :hover,
    :focus {
      background-color: ${stylistics.colors.primaryBgBtn};
      color: ${stylistics.colors.lightTextBtn};
      border: 1px solid ${stylistics.colors.primaryBgBtn};
    }
  }
  :hover,
  :focus {
    background-color: ${stylistics.colors.mainBg};
    color: ${stylistics.colors.primaryBgBtn};
    border: 1px solid ${stylistics.colors.primaryBgBtn};
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 50px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid ${stylistics.colors.secondaryTextBtn};
  border-radius: 20px;
  font-family: ${stylistics.fonts.body};
  font-style: normal;
  font-weight: ${stylistics.fontWeights.normal};
  font-size: ${stylistics.fontSizes.m};
  line-height: ${stylistics.lineHeights.body};
  letter-spacing: 0.1em;
  color: ${stylistics.colors.secondaryTextBtn};
  background-color: ${stylistics.colors.mainBg};
  :hover,
  :focus {
    background-color: ${stylistics.colors.secondaryTextBtn};
    color: ${stylistics.colors.lightTextBtn};
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
