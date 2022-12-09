import TableHead from "./TableHead";
import TableBody from "./TableBody";
import {TableStyle, TableText} from "./Table.styled"
import TableMobile from "./TableMobile";

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchTransactions } from "redux/transaction/transactionOperation";
import { useDispatch } from "react-redux";



const Table = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    const { transactions } = useSelector(state => state.transactions)

    return (
        <>
            {/* {console.log(transactions)} */}
            {transactions.length === 0
            ? (
                <TableStyle>
                    <TableHead/>
                    <TableText>Sorry, you havn't transactions</TableText>
                </TableStyle>)
            : (
                <>
                <TableStyle>
                    <TableHead/>
                    <TableBody items={transactions}/>   
                </TableStyle>
                    <TableMobile items={transactions}/>
                </>
            )}
           
            
        </>


    )
}

export default Table