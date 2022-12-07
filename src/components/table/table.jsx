import TableHead from "./tableHead";
import TableBody from "./tableBody";
import transaction from "./tableData.json"
import {TableStyle} from "./Table.styled"
import TableMobile from "./TableMobile";

const Table = () => {
    return (
        <>
        <TableStyle>
            <TableHead/>
            <TableBody items={transaction}/>
        </TableStyle>

        <TableMobile items={transaction}/>
        </>


    )
}

export default Table