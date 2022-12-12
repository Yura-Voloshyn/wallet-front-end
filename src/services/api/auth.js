import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet-jet.vercel.app',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/api/auth/register', data);
  setToken(result.data.token);
  return result;
};

export const userLogin = async data => {
  const { data: result } = await instance.post('/api/auth/login', data);
  setToken(result.data.token);
  return result;
};

export const logout = async () => {
  const data = await instance.get('/api/auth/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
