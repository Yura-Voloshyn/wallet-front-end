import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const Modal = styled.div`  
  outline: none;
  border: none;
  padding: 20px 11px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  opacity: 1;
  z-index: 998;
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
