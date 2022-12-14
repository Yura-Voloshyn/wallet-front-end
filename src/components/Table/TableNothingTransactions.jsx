import { TableText } from "./Table.styled"


const TableNothingTransactions = ({text}) => {
    return (
        <tbody>
            <TableText>
                <td colSpan="6">{text}</td>
            </TableText>
        </tbody>
    )
}

export default TableNothingTransactions
