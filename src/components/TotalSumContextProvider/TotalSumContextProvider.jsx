import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const TotalSumContext = createContext({});

export const TotalSumContextProvider = ({ children }) => {
  const [balance, setBalance] = useState('');
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);
  console.log(transactions);
  useEffect(() => {
    transactions.map(res => {
      console.log(res.balance);
    })
    return transactions.length === 0
      ? setBalance('0,00')
      : setBalance(
          `₴ ${transactions[0].balance.toFixed(2)}` 
        );
  }, [dispatch, transactions]);

  return (
    <TotalSumContext.Provider value={{ balance, setBalance }}>
      {children}
    </TotalSumContext.Provider>
  );
};

export const useTotalSum = () => useContext(TotalSumContext);
