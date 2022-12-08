// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { AppWrapper } from './App.styled';
// import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';

// import Currency from 'components/Currency/Currency';
import TotalBalance from 'components/TotalBalance/TotalBalance';
// import Home from 'pages/Home/Home';
// import LoginPage from 'pages/LoginPage';
import { UserRoutes } from 'UserRoutes';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';

const App = () => {
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <AppWrapper>
        {isLogin && (
          <>
            <Header />
            <Navigation />
            <TotalBalance />
            {/* <Currency /> */}
          </>
        )}

        <UserRoutes />
        {/* <LoginPage /> */}
        {/* <Currency /> */}

        {/* <Home /> */}
        {/* <StatisticsPage /> */}

        {/* <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Routes>
      </Suspense> */}
      </AppWrapper>
    </>
  );
};
export default App;
