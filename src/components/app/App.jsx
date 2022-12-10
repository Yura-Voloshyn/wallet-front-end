import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
import { useSelector } from 'react-redux';
import { AppWrapper } from './App.styled';
// import { UserRoutes } from 'UserRoutes';
// import { Header } from 'components/Header/Header';
// import { Navigation } from 'components/Navigation/Navigation';
// import Currency from 'components/Currency/Currency';
// import TotalBalance from 'components/TotalBalance/TotalBalance';

const App = () => {
  const isLogin = useSelector(state => state.auth.isLoggedIn);
  
  return (
    <>
      <AppWrapper>
        {/* {isLogin && (
          <>
            <Header />
            <Navigation />
            <TotalBalance />
            <Currency />
          </>
        )}
        <UserRoutes /> */}
        {/* <StatisticsPage/> */}
      </AppWrapper>
    </>
  );
};
export default App;
