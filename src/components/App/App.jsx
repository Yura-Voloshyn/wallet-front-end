// import { useSelector } from 'react-redux';
import { AppWrapper } from './App.styled';
import getData from 'services/api/getCurrency/getDataCurrency';
import { UserRoutes } from 'components/UserRoutes/UserRoutes';
import { current } from 'redux/auth/authOperation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
    getData();
  }, [dispatch]);

  return (
    <AppWrapper>
      <UserRoutes />
    </AppWrapper>
  );
};
export default App;
