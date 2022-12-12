import { Trb, Tablebody } from "./Table.styled";


const TableBody = ({items}) => {

    return (
        
        <Tablebody>
            {items.map(({date, type, category, comment, sum, balance}) => {
            
            const color = type ? "rgba(36, 204, 167, 1)" : "rgba(255, 101, 150, 1)";

            return (<Trb color={color}>
                        <td>{date}</td>
                        <td>{type === true ? "+" : "-"}</td>
                        <td>{category}</td>
                        <td>{comment}</td>
                        <td>{`${sum},00`}</td>
                        <td>{`${balance},00`}</td>
            </Trb>)
            }

            )}
        </Tablebody>
    )
}

export default TableBody