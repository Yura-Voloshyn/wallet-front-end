import { React } from 'react';
import { signup } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { HiEyeOff, HiEye } from 'react-icons/hi';
// import { ReactComponent as PasswordIcon } from '../../images/icons/password.svg';
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
  // const [state, setState] = useState({ ...initialValues });
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const result = [];
  // const [isHidePassword, setIsHidePassword] = useState(true);
  const handleSubmit = (e, { resetForm }) => {
    console.log('password OK', e.password === e.confirm);
    if (e.password === e.confirm) {
      result.push({
        email: e.email,
        password: e.password,
        name: e.name,
      });
      // setState({ ...result[0] });

      const onRegister = data => {
        console.log('data', data);
        dispatch(signup(data));
      };
      onRegister(result[0]);
      Notify.success('Registration success');
      resetForm();
      return;
    }
    Notify.warning('Password wrong');
    console.log('Password wrong');
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
              // onInput={evt => setState(...state, password => evt.target.value)}
              // type={isHidePassword ? 'password' : 'text'}
              type="password"
              name="password"
              placeholder="Password"
            />
            {/* <PasswordIcon />
            {isHidePassword ? (
              <HiEye onClick={() => setIsHidePassword(false)} />
            ) : (
              <HiEyeOff onClick={() => setIsHidePassword(true)} />
            )} */}
            <ErrorMessage
              name="password"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <FormLabel>
            <IconPassword />
            <FormField
              type="password"
              name="confirm"
              placeholder="Confirm password"
            />
            <ProgressBarLine password={80} />
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
