import styled from '@emotion/styled';
import { stylistics } from 'styles/styles';

export const Button = styled.button`
  min-width: 150px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-family: ${stylistics.fonts.body};
  font-size: ${stylistics.fontSizes.m};
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};
  border: 1px solid ${stylistics.colors.leisureExpens};
  transition: all 300ms linear;

  :hover,
  :focus {
    background-color: ${stylistics.colors.hoverBgBtn};
    color: ${stylistics.colors.lightTextBtn};
    border: 1px solid ${stylistics.colors.hoverBgBtn};
  }
`;

export const ModaLogoutBtn = ({ onClick, text, bgColor, textColor }) => {
  return (
    <Button onClick={onClick} bgColor={bgColor} textColor={textColor}>
      {text}
    </Button>
  );
};
