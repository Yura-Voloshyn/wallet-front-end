// import TotalBalance from 'components/TotalBalance/TotalBalance';
import Table from 'components/Table/Table';
// import { Navigation } from 'components/Navigation/Navigation';
import {
  HomeContainer,
  // CurrencyContainer,
  TableContainer,
} from './Home.styled';
import ButtonAddTransactions from '../../components/Button/ButtonAddTransaction/OpenModalBtn';
import ModalAddTransactions from '../../components/ModalAddTransactions/modalAddTransaction.jsx';
import { useState } from 'react';

const Home = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);
  const onCloseModal = () => {
    setIsModalAddTransactionOpen(false);
  };
  const onOpenModal = () => {
    setIsModalAddTransactionOpen(true);
  };
  return (
    <HomeContainer>
      {/* <CurrencyContainer> */}
        {/* <Navigation /> */}
        {/* <TotalBalance /> */}
      {/* </CurrencyContainer> */}
      <TableContainer>
        <Table />
      </TableContainer>
      <ButtonAddTransactions onOpen={onOpenModal} />
      {isModalAddTransactionOpen && (
        <ModalAddTransactions onClose={onCloseModal} />
      )}
    </HomeContainer>
  );
};

export default Home;
