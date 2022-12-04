import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Div,
  FormStyled,
  FormLabel,
  FormField,
  ButtonContainer,
  NavButton,
  NavButtonR,
  IconEmail,
  IconPassword,
  IconUser,
  // DivLine,
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
          </FormLabel>
          {/* <DivLine></DivLine> */}
          <FormLabel>
            <IconUser />
            <FormField type="text" name="name" placeholder="First name" />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <ButtonContainer>
            <NavButtonR type="submit">Register</NavButtonR>
            <NavButton type="submit">Log in</NavButton>
          </ButtonContainer>
        </FormStyled>
      </Formik>
    </Div>
  );
};

export default RegistrationForm;
