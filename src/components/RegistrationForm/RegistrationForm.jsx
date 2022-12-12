import { React, useState } from 'react';
import regEx from '../RegistrationForm/regEx';
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
  email: yup
    .string()
    .min(2)
    .matches(regEx.email, 'type valid email')
    .required(),
  password: yup
    .string()
    .min(6, 'must min length 6')
    .max(12, 'must max length 12')
    .matches(regEx.password, `Password must contain "123","A and b","# % *`)
    .required(),
  name: yup
    .string()
    .min(1, 'must min length 1')
    .max(12, 'must max length 12')
    .matches(
      regEx.name,
      'the name can contain letters and numbers without spaces'
    )
    .required(),
});

const RegistrationForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirm: '',
    name: '',
  };

  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isHideConfirm, setIsHideConfirm] = useState(true);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e, { resetForm }) => {
    Notify.init({
      width: '180px',
      position: 'center',
      distance: '50px',
      opacity: 1,
      borderRadius: '50px',
      timeout: 3000,
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

    const { email, password, name } = e;

    if (password !== e.confirm) {
      Notify.warning('Please, confirm password.');
      return;
    }
    if (password === e.confirm) {
      const res = await dispatch(signup({ email, password, name }));
      if (res.error && res.payload.status === 409) {
        Notify.warning(`User with email: " ${email} " is alredy exist`);
        return;
      } else if (res.error) {
        Notify.warning('Please check, if it`s written correctly.');
        return;
      }
      Notify.success('Registration success');
      resetForm();
      setPassword('');
      return res;
    }
  };

  return (
    <Div>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
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
            <SubmitBtn
              type="submit"
              disabled={!(isValid && dirty)}
              btnText={'register'}
            />
          </FormStyled>
        )}
      </Formik>
      <StyledNavLink btnText={'login'} to={'/login'} />
    </Div>
  );
};

export default RegistrationForm;
