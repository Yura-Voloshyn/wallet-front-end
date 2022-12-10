// import { useEffect, useState } from 'react';
import './TableStatistics.scss' 
import {
  Table,
  TableCategories,
  Square,
  TableFoot,
  TableHead,
  TableHeadName,
  TableBody,
  FootRaw,
  FootTitle,
  Expenses,
  Incomes,
} from './TableStatistics.styled';

export function TableStatistics({ categoryStatistics, incomeAndExpense }) {
  

  return (
    <Table className="table">
      <TableHead>
        <tr>
          <TableHeadName>Category</TableHeadName>
          <TableHeadName>Sum</TableHeadName>
        </tr>
      </TableHead>
      <TableBody>
        {categoryStatistics?.map(({ _id, totalSum }) => {
          const forStyle = _id.replace(/\s+/g, '').toLowerCase();
          
          let firtsCapLetter = _id.split('');
          firtsCapLetter[0] = firtsCapLetter[0].toUpperCase();
          firtsCapLetter = firtsCapLetter.join('');

         

          return (
            <tr key={_id}>
              <TableCategories>
                <div className={`square ${forStyle}`}></div>
                {firtsCapLetter}
              </TableCategories>

              <TableCategories>{totalSum}</TableCategories>
            </tr>
          );
        })}
      </TableBody>
      
        {incomeAndExpense.data.map(({owner, totalIncome, totalExpense }) => {
          return (
            <TableFoot key={owner}>
              <FootRaw>
                <FootTitle>Expenses:</FootTitle>
                <Expenses>{totalExpense}</Expenses>
              </FootRaw>
              <FootRaw>
                <FootTitle>Income:</FootTitle>
                <Incomes>{totalIncome}</Incomes>
              </FootRaw>
            </TableFoot>
          );
        })}
      
    </Table>
  );
}
