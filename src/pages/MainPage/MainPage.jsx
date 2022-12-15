import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import Currency from 'components/Currency/Currency';
import Home from 'pages/Home/Home';
import { MainPageWrapper } from './MainPage.styled';
// import TotalBalance from 'components/TotalBalance/TotalBalance';
import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
import { useLocation } from 'react-router-dom';
import Media from 'react-media';
const MainPage = () => {
  const location = useLocation();

  return (
      <MainPageWrapper>
          <Header />
          <Media query="(max-width: 768px)" render={() => <Navigation />} />
          {/* <Navigation /> */}
          {/* <TotalBalance /> */}
          {/* <Currency /> */}
          {location.pathname === '/home' && <Home />}
          {location.pathname === '/home/diagram' && (
            <Media query="(min-width: 768px)" render={() => <Home />} />
          )}

          {location.pathname === '/diagram' && (
            <Media query="(max-width: 767px)" render={() => <StatisticsPage />} />
          )}
          {location.pathname === '/currency' && (
            <Media query="(max-width: 767px)" render={() => <Currency />} />
          )}
    </MainPageWrapper>
    
  );
};

export default MainPage;
