import { Formik, ErrorMessage } from 'formik';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';

import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
} from './LoginForm.styled';

// const initialValues = {
//   email: '',
//   password: '',
// };

const LoginForm = () => {
  return (
    <FormWrap>
      <LogoWrap></LogoWrap>
      <Formik>
        <StyledForm autoComplete="off">
          <Label>
            <Input type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" />
          </Label>
          <Label>
            <Input name="password" placeholder="Password" />

            <ErrorMessage name="password" />
          </Label>
          <SubmitBtn type="submit">log in</SubmitBtn>
        </StyledForm>
      </Formik>
      <StyledNavLink to="/register">register</StyledNavLink>
    </FormWrap>
  );
};

export default LoginForm;
