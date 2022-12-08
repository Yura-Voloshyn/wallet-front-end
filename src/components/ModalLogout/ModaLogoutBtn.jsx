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
  color: ${stylistics.colors.lightTextBtn};
  background-color: ${props => props.bgColor};

  :hover,
  :focus {
    background-color: ${stylistics.colors.mainBg};
    color: ${stylistics.colors.primaryBgBtn};
    border: 1px solid ${stylistics.colors.primaryBgBtn};
  }
`;

export const ModaLogoutBtn = ({ onClick, text, bgColor }) => {
  return (
    <Button onClick={onClick} bgColor={bgColor}>
      {text}
    </Button>
  );
};
