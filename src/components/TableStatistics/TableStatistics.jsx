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
    <>
      {categoryStatistics.data.totalCategories.length === 0 && (
        <NoTransactions>
          You hadn't transactions at that time.
          <br /> Please choose another year or month
        </NoTransactions>
      )}
      {categoryStatistics.data.totalCategories.length !== 0&& <Table className="table">
        <TableHead>
          <tr>
            <TableHeadName>Category</TableHeadName>
            <TableHeadName>Sum</TableHeadName>
          </tr>
        </TableHead>

        <TableBody>
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
                <TableCategories>
                  {Number.isInteger(totalSum)
                    ? `${totalSum}.00`
                    : Math.round(totalSum * 100) / 100}
                </TableCategories>
              </tr>
            );
          })}
        </TableBody>

        <TableFoot key={categoryStatistics.data.owner}>
          <tr>
            <FootTitle>Expenses:</FootTitle>
            <Expenses>
              {Number.isInteger(categoryStatistics.data.totalExpense)
                ? `${categoryStatistics.data.totalExpense}.00`
                : Math.round(categoryStatistics.data.totalExpense * 100) / 100}
            </Expenses>
          </tr>
          <tr>
            <FootTitle>Income:</FootTitle>
            <Incomes>
              {Number.isInteger(categoryStatistics.data.totalIncome)
                ? `${categoryStatistics.data.totalIncome}.00`
                : Math.round(categoryStatistics.data.totalIncome * 100) / 100}
            </Incomes>
          </tr>
        </TableFoot>
      </Table>}
    </>
  );
}
