import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
import { AppWrapper } from './App.styled';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <AppWrapper>
      <LoginPage />
      {/* <StatisticsPage /> */}
    </AppWrapper>
  );
};
export default App;
