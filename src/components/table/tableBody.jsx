import { Trb } from "./Table.styled";

const TableBody = ({items}) => {
    return (
        <tbody>
            {items.map(({date, type, category, comment, sum, balance}) => {
            
            const color = type === "+" ? "rgba(36, 204, 167, 1)" : "rgba(255, 101, 150, 1)";

            return (<Trb color={color}>
                <td>{date}</td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comment}</td>
                <td>{sum}</td>
                <td>{balance}</td>
            </Trb>)
            }

            )}
        </tbody>
    )
}

export default TableBody