import Spinner from 'components/Spinner';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
import Home from 'pages/Home/Home';

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
// const HomePage = lazy(() => import('../../pages/Home/Home'));
// const StatisticsPage = lazy(() =>
//   import('../../pages/StatisticsPage/StatisticsPage')
// );
const PageNotFound = lazy(() =>
  import('../../pages/PageNotFound/PageNotFound')
);

export const UserRoutes = () => {
  const windowWidth = window.innerWidth;

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          
          {windowWidth >= 768 && (
            <Route path="/home" element={<MainPage />}>
              <Route path="diagram" element={<StatisticsPage />} />
            </Route>
          )}

          { windowWidth <= 767 &&
            <>
              <Route path="/home" element={<MainPage />} />
              <Route path="/diagram" element={<MainPage />} />
            </>
          }
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
