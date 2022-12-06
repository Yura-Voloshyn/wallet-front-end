import { Formik, ErrorMessage } from 'formik';
// import { useSelector } from 'react-redux';
import { useState } from 'react';

import schema from 'helpers';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
import { ReactComponent as EmailIcon } from '../../images/icons/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/icons/password.svg';
// import Spinner from 'components/Spinner';
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
  // const { isLoading } = useSelector(state => state.auth);

  // const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    // dispatch(userLogin(values));
    resetForm();
  };

  return (
    <FormWrap>
      {/* {isLoading && <Spinner />} */}
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema.login}
      >
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
          <SubmitBtn btnText={'log in'} />
        </StyledForm>
      </Formik>
      <StyledNavLink to="/register" btnText={'register'} />
    </FormWrap>
  );
};

export default LoginForm;
