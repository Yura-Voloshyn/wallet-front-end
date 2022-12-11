import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { userLogin } from 'redux/auth/authOperation';
import schema from 'helpers';
import { IconContext } from 'react-icons';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
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
  IconEmail,
  IconPassword,
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

  const handleSubmit = async (values, { resetForm }) => {
    const res = await dispatch(userLogin(values));

    if (res.error && res.payload === 401) {
      Notify.warning('Sorry, something is wrong, please, try again');
      return;
    } else if (res.error) {
      Notify.warning('Email or password is wrong');
      return;
    }
    Notify.success('Login success');

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
              <IconEmail />
              <Input type="email" name="email" placeholder="E-mail" />
              <ErrorMessage
                name="email"
                render={msg => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Label>
            <Label>
              <IconPassword />
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
