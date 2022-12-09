import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { stylistics } from '../../styles/styles';

export const FormWrap = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 32px 20px 36px;
  background-color: ${stylistics.colors.mainBg};
  @media screen and (min-width: 768px) {
    width: 533px;
    padding: 40px 58px 66px 65px;
    border-radius: 20px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  box-sizing: content-box;
  margin-top: 40px;
`;

export const Input = styled(Field)`
  width: 238px;
  padding: 8px;
  padding-right: auto;
  display: flex;
  align-items: center;
  border: none;
  padding-left: 42px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  margin: 0;
  ::placeholder {
    font-family: ${stylistics.fonts.body};
    font-style: normal;
    font-weight: ${stylistics.fontWeights.normal};
    font-size: ${stylistics.fontSizes.m};
    line-height: ${stylistics.lineHeights.body};
    color: ${stylistics.colors.secondaryText};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 409px;
  }
`;

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  bottom: -35px;
  padding: 4px 5px;
  color: ${stylistics.colors.expenseColor};
  background-color: transparent;
`;
