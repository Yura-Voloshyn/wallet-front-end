import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { ReactComponent as email } from '../../images/icons/email.svg';
import { ReactComponent as password } from '../../images/icons/password.svg';
import { ReactComponent as user } from '../../images/icons/user.svg';
import { HiEyeOff, HiEye } from 'react-icons/hi';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 616px;
    border-radius: 20px;
    margin: 0 auto;
  }
`;

export const FormStyled = styled(Form)`
  margin-top: 60px;
  background-color: #fff;
`;

export const FormLabel = styled.label`
  position: relative;
  display: block;
  box-sizing: content-box;
  margin-bottom: 40px;
`;

export const FormField = styled(Field)`
  width: 238px;
  padding: 8px;
  padding-right: auto;
  display: flex;
  align-items: center;
  border: none;
  padding-left: 42px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const IconEmail = styled(email)`
  position: absolute;
  left: 10px;
  top: 7px;
  width: 20px;
  height: 16px;
  fill: #e0e0e0;
  @media screen and (min-width: 768px) {
    top: 9px;
  }
`;

export const IconPassword = styled(password)`
  position: absolute;
  left: 10px;
  top: 3px;
  width: 16px;
  height: 21px;
  fill: #e0e0e0;
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
  fill: #e0e0e0;
  @media screen and (min-width: 768px) {
    top: 8px;
  }
`;

export const ProgressText = styled.p`
  position: absolute;
  top: 60px;
  left: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-weight: 200;
  font-size: 13px;
  color: red;
`;

export const HiEyeStyle = styled(HiEye)`
  position: absolute;
  top: 10px;
  left: 260px;
`;
export const HiEyeOffStyle = styled(HiEyeOff)`
  position: absolute;
  top: 10px;
  left: 260px;
`;
