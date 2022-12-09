import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
