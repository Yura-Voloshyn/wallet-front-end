import './TableStatistics.scss';
import {
  Table,
  TableCategories,
  TableFoot,
  TableHead,
  TableHeadName,
  TableBody,
  FootTitle,
  Expenses,
  Incomes,
  NoTransactions,
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
        {categoryStatistics.data.totalCategories.length === 0 && (
          <tr>
            <NoTransactions>No transactions</NoTransactions>
          </tr>
        )}
        {categoryStatistics.data.totalCategories.map(({ _id, totalSum }) => {
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

      <TableFoot key={categoryStatistics.data.owner}>
        <tr>
          <FootTitle>Expenses:</FootTitle>
          <Expenses>{categoryStatistics.data.totalExpense}</Expenses>
        </tr>
        <tr>
          <FootTitle>Income:</FootTitle>
          <Incomes>{categoryStatistics.data.totalIncome}</Incomes>
        </tr>
      </TableFoot>
    </Table>
  );
}
