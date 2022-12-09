import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

const HomePage = lazy(() => import('./pages/Home/Home'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const StatisticsPage = lazy(() =>
  import('./pages/StatisticsPage/StatisticsPage')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/diagram" element={<StatisticsPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
