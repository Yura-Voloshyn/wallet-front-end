import { TableMob, Trm, Tdm, Tdhm, Tds } from './Table.styled';
import ReadMoreComment from './ReadMoreComment';
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
                <Tdm>{<ReadMoreComment text={comment}/>}</Tdm>
                <Tds color={color}>{`${sum.toFixed(2)}`}</Tds>
                <Tdm>{`${balance.toFixed(2)}`}</Tdm>
              </Trm>
              </tbody>
          </TableMob>
        );
      })}
    </div>
  );
};

export default TableMobile;
