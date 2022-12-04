import TableHead from "./tableHead";
import TableBody from "./tableBody";
import styled from '@emotion/styled'
import transaction from "./tableData.json"


const TableStyle = styled.table`
    width: 715px;
    border-collapse: collapse;

`

const Table = () => {
    return (
        <TableStyle>
            <TableHead/>
            <TableBody items={transaction}/>
        </TableStyle>
    )
}

export default Table