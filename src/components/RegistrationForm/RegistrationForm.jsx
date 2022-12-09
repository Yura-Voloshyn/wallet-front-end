import { React, useState } from 'react';
import { signup } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IconContext } from 'react-icons';
import ProgressBarLine from '../ProgressBar/ProgressBar';

import {
  Div,
  FormStyled,
  FormLabel,
  FormField,
  IconEmail,
  IconPassword,
  IconUser,
  ErrorText,
  HiEyeStyle,
  HiEyeOffStyle,
} from './RegistrationForm.styled';

const schema = yup.object().shape({
  email: yup.string().min(2).required(),
  password: yup
    .string()
    .min(6, 'must min length 6')
    .max(12, 'must max length 12')
    .required(),
  name: yup
    .string()
    .min(1, 'must min length 1')
    .max(12, 'must max length 12')
    .required(),
});

const RegistrationForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirm: '',
    name: '',
  };

  const result = [];
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isHideConfirm, setIsHideConfirm] = useState(true);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (e, { resetForm }) => {
    Notify.init({
      width: '180px',
      position: 'center',
      distance: '50px',
      opacity: 1,
      borderRadius: '50px',
      timeout: 2000,
      success: {
        background: 'rgba(36, 204, 167, 1)',
        textColor: '#fff',
        childClassName: 'success',
        notiflixIconColor: '#fff',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: '#fff)',
        messageFontSize: '20px',
      },
      warning: {
        background: 'rgba(253, 148, 152, 1)',
        textColor: '#fff',
        childClassName: 'info',
        notiflixIconColor: '#fff',
        fontAwesomeIconColor: '#fff',
        messageFontSize: '20px',
      },
    });

    if (e.password === e.confirm) {
      result.push({
        email: e.email,
        password: e.password,
        name: e.name,
      });

      const onRegister = data => {
        dispatch(signup(data));
      };
      onRegister(result[0]);

      Notify.success('Registration success');
      resetForm();
      setPassword('');
      return;
    }
    Notify.warning('Password wrong');
  };
  return (
    <Div>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
          <FormLabel>
            <IconEmail />
            <FormField type="email" name="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <FormLabel>
            <IconPassword />
            <FormField
              onInput={evt => setPassword(evt.target.value)}
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
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <FormLabel>
            <IconPassword />
            <FormField
              type={isHideConfirm ? 'password' : 'text'}
              name="confirm"
              placeholder="Confirm password"
            />
            {isHideConfirm ? (
              <IconContext.Provider
                value={{
                  size: '20px',
                  color: 'rgba(224, 224, 224, 1)',
                }}
              >
                <HiEyeStyle onClick={() => setIsHideConfirm(false)} />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  size: '20px',
                  color: 'rgba(224, 224, 224, 1)',
                }}
              >
                <HiEyeOffStyle onClick={() => setIsHideConfirm(true)} />
              </IconContext.Provider>
            )}
            <ProgressBarLine password={password} />
          </FormLabel>
          <FormLabel>
            <IconUser />
            <FormField type="text" name="name" placeholder="First name" />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <SubmitBtn type="submit" btnText={'register'} />
        </FormStyled>
      </Formik>
      <StyledNavLink to="/login" btnText={'log in'} />
    </Div>
  );
};

export default RegistrationForm;
