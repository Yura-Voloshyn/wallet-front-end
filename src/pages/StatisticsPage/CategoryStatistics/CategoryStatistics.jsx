
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
} from './CategoryStatistics.styled';

export function CategoryStatistics() {
  return (
    <Table className="table">
      <TableHead>
        <tr>
          <TableHeadName>Category</TableHeadName>
          <TableHeadName>Sum</TableHeadName>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <TableCategories>
            <Square></Square>
            Basic expenses
          </TableCategories>

          <TableCategories>8 700.00</TableCategories>
        </tr>
        <tr>
          <TableCategories>
            <Square></Square>
            Basic expenses
          </TableCategories>

          <TableCategories>8 700.00</TableCategories>
        </tr>
        <tr>
          <TableCategories>
            <Square></Square>
            Basic expenses
          </TableCategories>

          <TableCategories>8 700.00</TableCategories>
        </tr>
        <tr>
          <TableCategories>
            <Square></Square>
            Basic expenses
          </TableCategories>

          <TableCategories>8 700.00</TableCategories>
        </tr>
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
