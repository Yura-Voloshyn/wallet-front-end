import { TotalBalanceWrapper, Balance } from './TotalBalance.styled';
// import { Title } from 'chart.js/dist/types';

const TotalBalance = () => {
  return (
    <TotalBalanceWrapper>
      <h2>Your balance</h2>
      <Balance>₴ 24 000.00</Balance>
    </TotalBalanceWrapper>
  );
};

export default TotalBalance;
