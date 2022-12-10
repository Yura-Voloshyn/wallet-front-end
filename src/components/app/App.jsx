// import { useSelector } from 'react-redux';
import { AppWrapper } from './App.styled';
import { UserRoutes } from 'components/UserRoutes/UserRoutes';
import { current } from 'redux/auth/authOperation';
// import { Header } from 'components/Header/Header';
// import { Navigation } from 'components/Navigation/Navigation';
// import Currency from 'components/Currency/Currency';
// import TotalBalance from 'components/TotalBalance/TotalBalance';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const App = () => {
  // const isLogin = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <AppWrapper>
      {/* {isLogin && (
          <>
            <Header />
            <Navigation />
            <TotalBalance />
            <Currency />
          </>
        )} */}
      <UserRoutes />
      
    </AppWrapper>
  );
};
export default App;
