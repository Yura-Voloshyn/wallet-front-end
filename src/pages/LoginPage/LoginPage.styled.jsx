import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const Container = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    /* max-width: 480px; */
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    align-items: center;
    height: 100%;
    max-width: 480px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: column;
    padding: 38px 0;
    max-width: none;
    height: 100%;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    height: 100%;
    max-width: none;
    align-items: center;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 66px;
  }
`;

export const Frame = styled.img`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 250px;
    width: 250px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 419px;
    margin-right: 38px;
    margin-bottom: 32px;
  }
`;

export const Text = styled.p`
  font-family: ${stylistics.fonts.headingBold};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: ${stylistics.colors.primaryText};
`;
export const FormContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(50px);
    background-color: ${stylistics.colors.secondBg};
    padding: 52px 91px 52px 107px;
  }
`;
