// import TableHead from "./tableHead";
// import TableBody from "./tableBody";
// import transaction from "./tableData.json"
// import {TableStyle} from "./Table.styled"
// import TableMobile from "./TableMobile";

import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

import { fetchTransactions } from 'redux/transaction/transactionOperation';
import { useDispatch } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  //   const transactions = useSelector(state => state.transactions);

  return (
    <>
      {/* {console.log(transactions)} */}
      {/* <TableStyle>
            <TableHead/>
            <TableBody items={transaction}/>
        </TableStyle>

        <TableMobile items={transaction}/> */}
    </>
  );
};

export default Table;