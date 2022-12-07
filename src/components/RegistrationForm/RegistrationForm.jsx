import { React, useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
// import ProgressBarLine from '../ProgressBar/ProgressBar';

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
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
    name: '',
  };
  const [state, setState] = useState({ ...initialValues });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  const result = [];
  // const handleChange = ({ target }) => {
  //   const { name, value, type, checked } = target;
  //   const newValue = type === 'checkbox' ? checked : value;
  //   setState(prevState => ({
  //     ...prevState,
  //     [name]: newValue,
  //   }));
  // };
  // const dispatch = useDispatch();
  const handleSubmit = e => {
    // e.preventDefault();
    console.log('e', e);
    result.push({
      email: e.email,
      password: e.password,
      name: e.name,
    });
    console.log('result', result[0]);
    setState({ ...result[0] });
    console.log('state', state);

    const onRegister = data => {
      console.log('data', data);
      dispatch(signup(data));
    };
    onRegister(result[0]);
    // setState({ ...initialValues });
    // const dispatch = useDispatch();
    // useEffect(() => dispatch(signup(result[0])));

    // const handleSubmit = (values, { resetForm }) => {
    //   console.log('values.confirm', values.confirm);
    //   console.log('values.password', values.password);
    //   console.log('values.name', values.name);
    //   if (values.confirm !== values.password) {
    //     console.log('Password ERROR');
    //     return;
    //   }
    //   if (values.confirm === values.password) {
    //     console.log('Password OK', values.confirm === values.password);
    //     setEmail(values.email);
    //     setPassword(values.password);
    //     setName(values.name);

    // result.push({
    //   email: email,
    //   password: password,
    //   name: name,
    // });
    //     console.log('result', result[0]);
    //     // signUp(result[0]);

    //     console.log('email', email);
    //     console.log('password', password);
    //     console.log('name', name);
    //     resetForm();
    //     return;
    //   }
    //   // setPassword(values.password);
    // };
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
              // onInput={evt => setPassword(evt.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            />
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
            {/* <ProgressBarLine password={20} /> */}
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
