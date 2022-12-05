import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const Modal = styled.div`  
  outline: none;
  border: none;
  padding: 20px 11px;
`;

export const CloseMod = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${stylistics.colors.primaryText};
  background-color: 'transparent';
  width: 16px;
  height: 16px;
  border: none;
  outline: none;
  box-shadow: none;

  @media screen and (max-width: 768px){
  display: none;
}
  &:hover, &:focus {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  }
`;

export const TitleMod = styled.h2`
  font-family: ${stylistics.fonts.heading};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${stylistics.colors.primaryText};
`;
