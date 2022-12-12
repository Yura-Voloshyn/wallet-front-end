import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const Container = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    background-color: ${stylistics.colors.mainBg};
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    margin-left: auto;
    width: 1280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 480px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: column;
    padding: 38px 0;
    max-width: none;
  }
  @media screen and (min-width: 1280px) {
    box-sizing: content-box;
    flex-direction: row;
    max-width: none;
    align-items: center;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 50px;
    padding-left: 114px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 47px;
    padding-left: 76px;
    padding-top: 153px;
    padding-bottom: 77.5px;
  }
`;
export const ImageContainerRegister = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 50px;
    padding-left: 114px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 49px;
    padding-left: 66px;
    padding-top: 153px;
    padding-bottom: 77.5px;
  }
`;

export const Frame = styled.img`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 260px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 435px;
    /* margin-right: 30px; */
    margin-bottom: 32px;
  }
`;

export const FrameRegister = styled.img`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 274px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 452px;
    /* margin-right: 30px; */
    margin-bottom: 32px;
  }
`;

export const Text = styled.p`
  font-family: ${stylistics.fonts.headingBold};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: ${stylistics.lineHeights.body};
  color: ${stylistics.colors.primaryText};
`;
export const FormContainer = styled.div`
  padding: auto 0;
  @media screen and (min-width: 1280px) {
    width: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(50px);
    background-color: ${stylistics.colors.secondBg};
    padding: auto;
    padding-left: 107px;
    padding-right: 91px;
  }
`;
