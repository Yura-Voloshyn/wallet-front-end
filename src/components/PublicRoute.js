import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = () => {
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};
