import * as yup from 'yup';

const schema = {
  login: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().required('Required'),
  }),
};

export default schema;
