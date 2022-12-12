
import TotalBalance from 'components/TotalBalance/TotalBalance';
import Table from 'components/Table/Table';
import { Navigation } from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';


import {
  HomeContainer,
  CurrencyContainer,
  TableContainer,
  StatisticsContainer,
  OnTanbletWrapper,
} from './Home.styled';
import Currency from 'components/Currency/Currency';
import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
import Media from 'react-media';

const Home = () => {
  const location = useLocation();

  return (
    <HomeContainer>
      <CurrencyContainer>
        <OnTanbletWrapper>
          <Media query="(min-width: 768px)" render={() => <Navigation />} />

          <TotalBalance />
        </OnTanbletWrapper>

        <Currency />
      </CurrencyContainer>

      {location.pathname === '/home' && (
        <TableContainer>
          <Table />
        </TableContainer>
      )}
      {location.pathname === '/home/diagram' && (
        <StatisticsContainer>
          <StatisticsPage />
        </StatisticsContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
