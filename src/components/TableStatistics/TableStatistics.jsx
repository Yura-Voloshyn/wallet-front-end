import { useEffect, useState } from 'react';
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
const testArrCategories = [
  'Main expenses',
  'Products',
  'Car',
  'Self care',
  'Child care',
  'Household products',
  'Education',
  'Leisure',
  'Other expenses',
  'Entertainment',
];

export function TableStatistics() {
  const [categoryStatistics, setCategoryStatistics] = useState([]);

  useEffect(() => {
    const getCategoryStatistics = data => {
      setCategoryStatistics(data);
    };
    getCategoryStatistics(testArrCategories);
  }, []);

  return (
    <Table className="table">
      <TableHead>
        <tr>
          <TableHeadName>Category</TableHeadName>
          <TableHeadName>Sum</TableHeadName>
        </tr>
      </TableHead>
      <TableBody>
        {categoryStatistics?.map(data => {
          return (
            <tr>
              <TableCategories>
                <Square></Square>
                {data}
              </TableCategories>

              <TableCategories>8 700.00</TableCategories>
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
