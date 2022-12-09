import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet-jet.vercel.app/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/api/auth/register', data);
  setToken(result.data.token);
  return result;
};

export const userLogin = async data => {
  const { data: result } = await instance.post('api/auth/login', data);
  setToken(result.data.token);
  return result;
};

export const logout = async () => {
  const data = await instance.get('/api/auth/logout');
  setToken();
  return data;
};

export default instance;
