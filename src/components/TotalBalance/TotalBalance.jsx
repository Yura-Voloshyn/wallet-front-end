import { TotalBalanceWrapper, Balance, Title } from './TotalBalance.styled';
import { useSelector } from 'react-redux';
// import { Title } from 'chart.js/dist/types';

const TotalBalance = () => {
  
  const { transactions } = useSelector(state => state.transactions)

  return (
    <TotalBalanceWrapper>
      <Title>Your balance</Title>
      <Balance>{transactions.length === 0 ? '0,00' : `₴ ${transactions[0].balance},00`}</Balance>
    </TotalBalanceWrapper>
  );
};

export default TotalBalance;
