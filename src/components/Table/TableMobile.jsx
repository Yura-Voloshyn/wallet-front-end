import { TableMob, Trm, Tdm, Tdhm, Tds } from './Table.styled';
import { nanoid } from 'nanoid';

const TableMobile = ({ items }) => {
  const tableHeadTitle = [
    'Date',
    'Type',
    'Category',
    'Comment',
    'Summ',
    'Balance',
  ];
  return (
    <div>
      {items.map(({ date, type, category, comment, sum, balance }) => {
        const color = type ? 'rgba(36, 204, 167, 1)' : 'rgba(255, 101, 150, 1)';

        return (
          <TableMob key={nanoid()} color={color}>
            <tbody>
              <Trm >
                {tableHeadTitle.map(el => (
                  <Tdhm key={nanoid()} >{el}</Tdhm>
                ))}
              </Trm>
              </tbody>
              <tbody>
              <Trm>
                <Tdm>{date}</Tdm>
                <Tdm>{type === true ? '+' : '-'}</Tdm>
                <Tdm>{category}</Tdm>
                <Tdm>{comment}</Tdm>
                <Tds color={color}>{`${sum},00`}</Tds>
                <Tdm>{`${balance},00`}</Tdm>
              </Trm>
              </tbody>
          </TableMob>
        );
      })}
    </div>
  );
};

export default TableMobile;
