import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { ReactComponent as email } from '../../icons/email.svg';
import { ReactComponent as password } from '../../icons/password.svg';
import { ReactComponent as user } from '../../icons/user.svg';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 100vh;
`;

export const FormStyled = styled(Form)`
  padding: 20px 0;
  background-color: #fff;
`;

export const FormLabel = styled.label`
  position: relative;
  display: block;
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
  border-bottom: 1px solid #e0e0e0; ;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

export const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  background: #24cca7;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
  background: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  color: rgba(74, 86, 226, 1);
  &:active {
    background: #24cca7;
  }
`;
export const NavButtonR = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  background: #24cca7;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #fff;
  background: #24cca7;
`;

export const IconEmail = styled(email)`
  position: absolute;
  left: 10px;
  top: 6px;
  width: 20px;
  height: 16px;
  fill: #e0e0e0;
`;

export const IconPassword = styled(password)`
  position: absolute;
  left: 10px;
  top: 6px;
  width: 16px;
  height: 21px;
  fill: #e0e0e0;
`;

export const IconUser = styled(user)`
  position: absolute;
  left: 10px;
  top: 4px;
  width: 18px;
  height: 18px;
  fill: #e0e0e0;
`;

export const DivLine = styled.div`
  width: 280px;
  height: 0px;
  left: 20px;
  top: 306px;

  border: 4px solid #e5f1ef;
`;

export const ErrorText = styled.p`
  font-weight: 200;
  font-size: 13px;
  color: red;
`;
