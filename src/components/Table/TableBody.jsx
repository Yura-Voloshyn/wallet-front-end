import { Trb, Tbody } from './Table.styled';
import ReadMoreComment from './ReadMoreComment';
import { nanoid } from 'nanoid';
const TableBody = ({ items }) => {
  return (
    <Tbody>
      {items.map(({ date, type, category, comment, sum, balance }) => {
        const color = type ? 'rgba(36, 204, 167, 1)' : 'rgba(255, 101, 150, 1)';

        return (
          <Trb key={nanoid()} color={color}>
            <td>{date}</td>
            <td>{type === true ? '+' : '-'}</td>
            <td>{category}</td>
            <td>{<ReadMoreComment text={comment}/>}</td>
            <td>{`${sum.toFixed(2)}`}</td>
            <td>{`${balance.toFixed(2)}`}</td>
          </Trb>
        );
      })}
    </Tbody>
  );
};

export default TableBody;
