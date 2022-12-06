import TableHead from "./TableHead";
import TableBody from "./TableBody";
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