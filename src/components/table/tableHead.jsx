import { Tr } from "./Table.styled"

const TableHead = () => {
    const tableHeadTitle = ["Date", "Type", "Category", "Comment", "Summ", "Balance"]

    return (
        <thead>
            <Tr>
                {tableHeadTitle.map(el => <th>{el}</th>)}
            </Tr>
        </thead>
        
        
    )
}

export default TableHead