import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { AppWrapper } from './App.styled';
// import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
// import Currency from 'components/Currency/Currency';
// import Home from 'pages/home';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <AppWrapper>
      <LoginPage />
      {/* <Currency /> */}
      {/* <Home /> */}
      {/* <StatisticsPage /> */}

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </AppWrapper>
  );
};
export default App;
