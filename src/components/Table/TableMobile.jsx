import { TableMob, Trm, Tdm, Tdhm, Tds} from "./Table.styled";


const TableMobile = ({items}) => {
    const tableHeadTitle = ["Date", "Type", "Category", "Comment", "Summ", "Balance"]
    return (
        <div>
            {items.map(({date, type, category, comment, sum, balance}) => {
                const color = type === "+" ? "rgba(36, 204, 167, 1)" : "rgba(255, 101, 150, 1)";
                
                return (
                    <TableMob color={color}>
                        <Trm>
                            {tableHeadTitle.map(el => <Tdhm>{el}</Tdhm>)}
                        </Trm>
                        <Trm>
                            <Tdm>{date}</Tdm>
                            <Tdm>{type}</Tdm>
                            <Tdm>{category}</Tdm>
                            <Tdm>{comment}</Tdm>
                            <Tds color={color}>{sum}</Tds>
                            <Tdm>{balance}</Tdm>
                        </Trm>
                    </TableMob>
                        )    
                    }
                )
            }
        </div>
            
    )
}

export default TableMobile