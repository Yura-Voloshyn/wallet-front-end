import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { stylistics } from '../../styles/styles';

export const FormWrap = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px 36px;
  background-color: ${stylistics.colors.mainBg};
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    padding: 40px 58px 66px 65px;
    border-radius: 20px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  margin-top: 60px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  border-bottom: 1px solid ${stylistics.colors.secondaryLightText};
  & + & {
    margin-top: 40px;
  }
`;

export const Input = styled(Field)`
  width: 240px;
  padding: 8px 20px;
  border: none;
  font-family: ${stylistics.fonts.body};
  font-style: normal;
  font-weight: ${stylistics.fontWeights.normal};
  font-size: ${stylistics.fontSizes.m};
  line-height: 1.5;
  color: ${stylistics.colors.primaryText};
  background-color: transparent;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-family: ${stylistics.fonts.body};
    font-style: normal;
    font-weight: ${stylistics.fontWeights.normal};
    font-size: ${stylistics.fontSizes.m};
    line-height: 1.5;
    color: ${stylistics.colors.secondaryText};
  }
  @media screen and (min-width: 768px) {
    width: 370px;
  }
`;

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  bottom: -35px;
  padding: 4px 5px;
  color: #f21407;
  background-color: transparent;
`;
