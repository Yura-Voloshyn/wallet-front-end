import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTransactions } from 'redux/transaction/transactionOperation';

const TotalSumContext = createContext({});

export const TotalSumContextProvider = ({ children }) => {
  const [balance, setBalance] = useState('');
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);

  useEffect(() => {
    return transactions.length === 0
      ? setBalance('0,00')
      : setBalance(`₴ ${transactions[0].balance},00`);
  }, [dispatch, transactions]);

  return (
    <TotalSumContext.Provider value={{ balance, setBalance }}>
      {children}
    </TotalSumContext.Provider>
  );
};

export const useTotalSum = () => useContext(TotalSumContext);
