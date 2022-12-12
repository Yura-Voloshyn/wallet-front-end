import TotalBalance from 'components/TotalBalance/TotalBalance';
import Table from 'components/Table/Table';
import { Navigation } from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Currency from 'components/Currency/Currency';
import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';
import Media from 'react-media';

import {
  HomeContainer,
  CurrencyContainer,
  TableContainer,
  StatisticsContainer,
  OnTanbletWrapper,
} from './Home.styled';
import ButtonAddTransactions from '../../components/Button/ButtonAddTransaction/OpenModalBtn';
import ModalAddTransactions from '../../components/ModalAddTransactions/modalAddTransaction.jsx';

const Home = () => {
  const location = useLocation();
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
      <CurrencyContainer>
        <OnTanbletWrapper>
          <Media query="(min-width: 768px)" render={() => <Navigation />} />

          <TotalBalance />
        </OnTanbletWrapper>

        <Media query="(min-width: 768px)" render={() => <Currency />} />
      </CurrencyContainer>

      {location.pathname === '/home' && (
        <TableContainer>
          <Table />
        </TableContainer>
      )}
      <ButtonAddTransactions onOpen={onOpenModal} />
      {isModalAddTransactionOpen && (
        <ModalAddTransactions onClose={onCloseModal} />
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
