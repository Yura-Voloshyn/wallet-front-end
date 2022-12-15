import { IconContext } from 'react-icons';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableNothingTransactions from './TableNothingTransactions';
import {
  TableStyle,
  ButtonContainer,
  ButtonLoadMorePrev,
  ButtonLoadMoreNext,
} from './Table.styled';
import TableMobile from './TableMobile';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchTransactions } from 'redux/transaction/transactionOperation';
import { useDispatch } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  // const [transaction, setTransaction] = useState([]);
  const [page, setPage] = useState(1);
  const { transactions } = useSelector(state => state.transactions);

  useEffect(() => {
    if (page >= 1 && page <= 5) {
      dispatch(fetchTransactions(page));
    }

    if (transactions.length < 5) {
      return;
    }
  }, [dispatch, page]);

  return (
    <>
      {transactions.length === 0 ? (
        <TableStyle id="table">
          <TableHead />
          <TableNothingTransactions text={"Sorry, you havn't transactions"} />
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
              <ButtonLoadMoreNext onClick={() => setPage(prev => prev + 1)}>
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
