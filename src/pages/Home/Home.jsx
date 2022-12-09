import TotalBalance from 'components/TotalBalance/TotalBalance';
import Table from 'components/Table/Table';
import {
  HomeContainer,
  CurrencyContainer,
  TableContainer,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <CurrencyContainer>
        <TotalBalance />
      </CurrencyContainer>
      <TableContainer>
        <Table />
      </TableContainer>
    </HomeContainer>
  );
};

export default Home;
