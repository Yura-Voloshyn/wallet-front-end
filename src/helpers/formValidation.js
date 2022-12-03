import * as yup from 'yup';

const schema = {
  register: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup
      .string()
      .min(6, 'Minimun 6 characters')
      .max(12, 'Maximum 12 characters')
      .required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password do not match')
      .required(),
    name: yup
      .string()
      .min(1, 'Minimun 1 characters')
      .max(12, 'Maximum 12 characters')
      .required('Required'),
  }),
  login: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().required('Required'),
  }),
};

export default schema;
