import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
import { Logo } from 'components/Logo/Logo';
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

const RegistrationForm = () => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup
      .string()
      .min(6, 'must min length 6')
      .max(12, 'must max length 12')
      .required(),
    confirm: yup.string().required(),
    name: yup
      .string()
      .min(1, 'must min length 1')
      .max(12, 'must max length 12')
      .required(),
  });

  const initialValues = {
    email: '',
    password: '',
    confirm: '',
    name: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
            <FormField type="password" name="password" placeholder="Password" />
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
            <ProgressBarLine />
          </FormLabel>
          <FormLabel>
            <IconUser />
            <FormField type="text" name="name" placeholder="First name" />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <SubmitBtn type="submit">register</SubmitBtn>
          <StyledNavLink to="/login">log in</StyledNavLink>
        </FormStyled>
      </Formik>
    </Div>
  );
};

export default RegistrationForm;
