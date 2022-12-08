import { TotalBalanceWrapper, Balance } from './TotalBalance.styled';
import { Title } from 'chart.js/dist/types';

const TotalBalance = () => {
  return (
    <TotalBalanceWrapper>
      <Title>Your balance</Title>
      <Balance>₴ 24 000.00</Balance>
    </TotalBalanceWrapper>
  );
};

export default TotalBalance;
