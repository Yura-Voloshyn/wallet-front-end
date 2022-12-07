import styled from '@emotion/styled'

const Table = styled.table`

    display: flex;
    width: 280px;
    border-left: 5px solid ${color => color.color};
    margin-bottom: 8px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);

    @media (min-width: 321px) {
        display: none;
    }
`

const Trm = styled.tr`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 140px;
    & td:last-child {
        border: none;
    }
`

const Td = styled.td`
display: flex;
align-items: center;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-right: 20px;
    justify-content: end;
    text-align: end;
    height: 43px;
    border-bottom: 1px solid #DCDCDF;

`

const Tdh = styled.td`
display: flex;
align-items: center;
    height: 43px;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    padding-left: 15px;
    border-bottom: 1px solid #DCDCDF;
`
const Tds = styled.td`
display: flex;
align-items: center;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-right: 20px;
    justify-content: end;
    height: 43px;
    color: ${color => color.color};
    border-bottom: 1px solid #DCDCDF;
`

const TableMobile = ({items}) => {
    const tableHeadTitle = ["Date", "Type", "Category", "Comment", "Summ", "Balance"]
    return (
        <div>
            {items.map(({date, type, category, comment, sum, balance}) => {
                const color = type === "+" ? "rgba(36, 204, 167, 1)" : "rgba(255, 101, 150, 1)";
            return (
                <Table color={color}>
                    <Trm>
                        {tableHeadTitle.map(el => <Tdh>{el}</Tdh>)}
                    </Trm>
                    <Trm>
                        <Td>{date}</Td>
                        <Td>{type}</Td>
                        <Td>{category}</Td>
                        <Td>{comment}</Td>
                        <Tds color={color}>{sum}</Tds>
                        <Td>{balance}</Td>
                    </Trm>
                </Table>
            )
                    

            }
            )
            }
        </div>
            
    )
}

export default TableMobile