// import TotalBalance from 'components/TotalBalance/TotalBalance';
import Table from 'components/Table/Table';
// import { Navigation } from 'components/Navigation/Navigation';
import {
  HomeContainer,
  CurrencyContainer,
  TableContainer,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <CurrencyContainer>
        {/* <Navigation /> */}
        {/* <TotalBalance /> */}
      </CurrencyContainer>
      <TableContainer>
        <Table />
      </TableContainer>
    </HomeContainer>
  );
};

export default Home;
