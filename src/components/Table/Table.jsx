import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableNothingTransactions from './TableNothingTransactions';
import { TableStyle, ButtonLoadMore } from './Table.styled';
import TableMobile from './TableMobile';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchMoreTransaction,
  fetchTransactions,
} from 'redux/transaction/transactionOperation';
import { useDispatch } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const dispatchPage = useDispatch();
  // const [transaction, setTransaction] = useState([]);
const { transactions } = useSelector(state => state.transactions);
  const [page, setPage] = useState(2);

  // console.log('page', page);
  console.log('transactions', transactions);

  
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const onSubmitMore = () => {
    setPage(prev => prev + 1);
    if (page >= 1 && page <= 5) {
        dispatchPage(fetchMoreTransaction(page));
      }
  }
  console.log(transactions.length);
  return (
    <>
      {transactions.length === 0 ? (
        <TableStyle id="table">
          <TableHead />
          <TableNothingTransactions text={"Sorry, you haven't transactions"} />
        </TableStyle>
      ) : (
        <>
          <TableStyle>
            <TableHead />
            <TableBody items={transactions} />
            {transactions.length < 5 ? (
              <ButtonLoadMore
                onClick={() => {
                  setPage(1);
                }}
              >
                <BiChevronUp />
              </ButtonLoadMore>
            ) : null}
            {transactions.length === 5 ? (
              <ButtonLoadMore onClick={() =>onSubmitMore()}>
                <BiChevronDown />
              </ButtonLoadMore>
            ) : null}
          </TableStyle>
          <TableMobile items={transactions} />
        </>
      )}
    </>
  );
};

export default Table;
