// import { useEffect, useState } from 'react';
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

export function TableStatistics({ categoryStatistics }) {
  return (
    <Table className="table">
      <TableHead>
        <tr>
          <TableHeadName>Category</TableHeadName>
          <TableHeadName>Sum</TableHeadName>
        </tr>
      </TableHead>
      <TableBody>
        {categoryStatistics?.map(({ id, category, sum, color }) => {
          return (
            <tr key={id}>
              <TableCategories>
                <Square style={{ backgroundColor: color }}></Square>
                {category}
              </TableCategories>

              <TableCategories>{sum}</TableCategories>
            </tr>
          );
        })}
      </TableBody>
      <TableFoot>
        <FootRaw>
          <FootTitle>Expenses:</FootTitle>
          <Expenses>22 549.24</Expenses>
        </FootRaw>
        <FootRaw>
          <FootTitle>Income:</FootTitle>
          <Incomes>27 350.00</Incomes>
        </FootRaw>
      </TableFoot>
    </Table>
  );
}
