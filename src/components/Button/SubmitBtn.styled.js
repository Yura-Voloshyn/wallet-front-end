import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  border: 1px solid #24cca7;
  border-radius: 20px;
  font-family: 'Circe-Regular', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  color: #ffffff;
  background-color: #24cca7;
  :disabled {
    opacity: 0.5;
    :hover,
    :focus {
      background-color: #24cca7;
      color: #ffffff;
      border: 1px solid #24cca7;
    }
  }
  :hover,
  :focus {
    background-color: #ffffff;
    color: #24cca7;
    border: 1px solid #24cca7;
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
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe-Regular', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  color: #4a56e2;
  background-color: #ffffff;
  :hover,
  :focus {
    background-color: #4a56e2;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
