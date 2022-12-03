import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { userLogin } from 'redux/auth/authOperation';
import schema from 'helpers';
import Logo from 'components/Logo';
import Spinner from 'components/Spinner';
import { ReactComponent as EmailIcon } from 'images/email.svg';
import { ReactComponent as PasswordIcon } from 'images/password.svg';
import NavLink from 'components/Button/StyledNavLink';
import SubmitBtn from 'components/Button/SubmitBtn';
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  ErrorMsg,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const { isLoading } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(userLogin(values));
    resetForm();
  };

  return (
    <FormWrap>
      {isLoading && <Spinner />}
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.login}
      >
        {({ isValid, dirty }) => (
          <StyledForm autoComplete="off">
            <Label>
              <EmailIcon />
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessage
                name="email"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              <PasswordIcon />
              <Input
                type={isHidePassword ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              {isHidePassword ? (
                <HiEye onClick={() => setIsHidePassword(false)} />
              ) : (
                <HiEyeOff onClick={() => setIsHidePassword(true)} />
              )}
              <ErrorMessage
                name="password"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <SubmitBtn type="submit" disabled={!(isValid && dirty)}>
              log in
            </SubmitBtn>
          </StyledForm>
        )}
      </Formik>
      <NavLink to="/register">register</NavLink>
    </FormWrap>
  );
};

export default LoginForm;
