import { Trb } from './Table.styled';
import { nanoid } from 'nanoid';
const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(({ date, type, category, comment, sum, balance }) => {
        const color = type ? 'rgba(36, 204, 167, 1)' : 'rgba(255, 101, 150, 1)';

        return (
          <Trb key={nanoid()} color={color}>
            <td>{date}</td>
            <td>{type === true ? '+' : '-'}</td>
            <td>{category}</td>
            <td>{comment}</td>
            <td>{`${sum},00`}</td>
            <td>{`${balance},00`}</td>
          </Trb>
        );
      })}
    </tbody>
  );
};

export default TableBody;
