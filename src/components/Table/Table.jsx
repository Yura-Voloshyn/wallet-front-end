import { IconContext } from 'react-icons';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableNothingTransactions from './TableNothingTransactions';
import {
  TableStyle,
  ButtonLoadMorePrev,
  ButtonLoadMoreNext,
} from './Table.styled';
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
          </TableStyle>
          <>
            {page > 1 ? (
              <ButtonLoadMorePrev onClick={() => setPage(prev => prev - 1)}>
                <IconContext.Provider
                  value={{
                    size: '20px',
                    color: '#000000',
                  }}
                >
                  <BiChevronLeft />
                </IconContext.Provider>
              </ButtonLoadMorePrev>
            ) : null}
            {transactions.length === 5 ? (

                <ButtonLoadMoreNext onClick={() => onSubmitMore()}>
                <IconContext.Provider
                  value={{
                    size: '20px',
                    color: '#000000',
                  }}
                >
                  <BiChevronRight />
                </IconContext.Provider>
              </ButtonLoadMoreNext>

            ) : null}
          </>
          <TableMobile items={transactions} />
        </>
      )}
    </>
  );
};

export default Table;
