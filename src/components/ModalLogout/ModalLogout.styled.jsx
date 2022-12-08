import styled from '@emotion/styled';
import { stylistics } from 'styles/styles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 240px;
  padding: 25px;
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-family: ${stylistics.fonts.heading};
  font-size: ${stylistics.fontSizes.s};
  color: ${stylistics.colors.primaryText};
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
