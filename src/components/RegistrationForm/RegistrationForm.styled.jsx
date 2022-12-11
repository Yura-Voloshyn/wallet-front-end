import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { stylistics } from '../../styles/styles';
import { ReactComponent as email } from '../../images/icons/email.svg';
import { ReactComponent as password } from '../../images/icons/password.svg';
import { ReactComponent as user } from '../../images/icons/user.svg';
import { HiEyeOff, HiEye } from 'react-icons/hi';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  width: 320px;
  margin: 0 auto;
  padding: 32px 20px 36px;
  background-color: ${stylistics.colors.mainBg};
  @media screen and (min-width: 768px) {
    box-sizing: content-box;
    width: 410px;
    padding: 40px 58px 66px 65px;
    border-radius: 20px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  position: relative;
  display: block;
  box-sizing: content-box;
  margin-top: 40px;
  width: 289px;
  @media screen and (min-width: 768px) {
    width: 409px;
  }
`;

export const FormField = styled(Field)`
  width: 238px;
  padding: 8px;
  padding-right: auto;
  display: flex;
  align-items: center;
  border: none;
  padding-left: 42px;
  box-sizing: content-box;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  ::placeholder {
    font-family: ${stylistics.fonts.body};
    font-style: normal;
    font-weight: ${stylistics.fontWeights.normal};
    font-size: ${stylistics.fontSizes.m};
    line-height: ${stylistics.lineHeights.body};
    color: ${stylistics.colors.secondaryText};
  }
  @media screen and (min-width: 768px) {
    font-size: ${stylistics.fontSizes.m};
    width: 365px;
  }
`;

export const IconEmail = styled(email)`
  position: absolute;
  left: 10px;
  top: 7px;
  width: 20px;
  height: 16px;
  fill: ${stylistics.colors.secondaryLightText};
  @media screen and (min-width: 768px) {
    top: 9px;
  }
`;

export const IconPassword = styled(password)`
  position: absolute;
  left: 10px;
  top: 3px;
  width: ${stylistics.fontSizes.s};
  height: 21px;
  fill: ${stylistics.colors.secondaryLightText};
  @media screen and (min-width: 768px) {
    top: 5px;
  }
`;

export const IconUser = styled(user)`
  position: absolute;
  left: 10px;
  top: 6px;
  width: 18px;
  height: 18px;
  fill: ${stylistics.colors.secondaryLightText};
  @media screen and (min-width: 768px) {
    top: 8px;
  }
`;

export const ProgressText = styled.p`
  position: absolute;
  top: 60px;
  left: 10px;
  font-size: ${stylistics.fontSizes.xs};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-weight: 200;
  font-size: ${stylistics.fontSizes.xs};
  color: ${stylistics.colors.expenseColor};
`;

export const HiEyeStyle = styled(HiEye)`
  position: absolute;
  top: 10px;
  left: 260px;
  @media screen and (min-width: 768px) {
    top: 10px;
    left: 385px;
  } ;
`;
export const HiEyeOffStyle = styled(HiEyeOff)`
  position: absolute;
  top: 10px;
  left: 260px;
  @media screen and (min-width: 768px) {
    top: 10px;
    left: 385px;
  } ;
`;
