import { TotalBalanceWrapper, Balance, Title } from './TotalBalance.styled';
import { useTotalSum } from 'components/TotalSumContextProvider/TotalSumContextProvider';
const TotalBalance = () => {
  const { balance } = useTotalSum();

  return (
    <TotalBalanceWrapper>
      <Title>Your balance</Title>
      <Balance>{balance}</Balance>
    </TotalBalanceWrapper>
  );
};

export default TotalBalance;
