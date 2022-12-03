import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrap = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px 36px;
  background-color: #ffffff;
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
  border-bottom: 1px solid #e0e0e0;
  & + & {
    margin-top: 40px;
  }
`;

export const Input = styled(Field)`
  width: 240px;
  padding: 8px 20px;
  border: none;
  font-family: 'Circe-Regular', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-family: 'Circe-Regular', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.5;
    color: #bdbdbd;
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
