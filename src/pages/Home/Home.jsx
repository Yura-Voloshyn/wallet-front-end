import TotalBalance from 'components/TotalBalance/TotalBalance';
// import Table from 'components/Table/table';
import NavigationsHome from 'components/navigationsHome/navigationsHome';
import {
  HomeContainer,
  CurrencyContainer,
  TableContainer,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <CurrencyContainer>
        <NavigationsHome />
        <TotalBalance />
      </CurrencyContainer>
      <TableContainer>
        {/* <Table /> */}
      </TableContainer>
    </HomeContainer>
  );
};

export default Home;
