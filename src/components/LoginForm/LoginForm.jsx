import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { userLogin } from 'redux/auth/authOperation';
import schema from 'helpers';
import { IconContext } from 'react-icons';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
import { ReactComponent as EmailIcon } from '../../images/icons/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/icons/password.svg';
import Spinner from 'components/Spinner';
import {
  FormWrap,
  LogoWrap,
  StyledForm,
  Label,
  Input,
  ErrorMsg,
} from './LoginForm.styled';
import {
  HiEyeStyle,
  HiEyeOffStyle,
} from '../RegistrationForm/RegistrationForm.styled';

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
                <IconContext.Provider
                  value={{
                    size: '20px',
                    color: 'rgba(224, 224, 224, 1)',
                  }}
                >
                  <HiEyeStyle onClick={() => setIsHidePassword(false)} />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{
                    size: '20px',
                    color: 'rgba(224, 224, 224, 1)',
                  }}
                >
                  <HiEyeOffStyle onClick={() => setIsHidePassword(true)} />
                </IconContext.Provider>
              )}
              <ErrorMessage
                name="password"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <SubmitBtn
              type="submit"
              disabled={!(isValid && dirty)}
              btnText={'log in'}
            />
          </StyledForm>
        )}
      </Formik>
      <StyledNavLink btnText={'register'} to={'/register'} />
    </FormWrap>
  );
};

export default LoginForm;
