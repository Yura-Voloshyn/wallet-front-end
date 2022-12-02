import styled from '@emotion/styled'

const Table = styled.table`
    margin-top: 46px;
    width: 715px;
    border: none;
`

const Thead = styled.thead`
    height: 58px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    color: rgba(0, 0, 0, 1);
    font-family: 'Circe';
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
        & th:nth-child(1) {
            width: 14%;
        }

        & th:nth-child(2) {
            width: 13%;
        }

        & th:nth-child(3) {
            width: 22%;
        }

        & th:nth-child(4) {
            width: 29%;
        }
        & th:nth-child(5) {
            width: 12%;
        }
        & th:nth-child(6) {
            width: 10%;
        }
       
`

const Th = styled.th`
    text-align: center;
`


const TableHead = () => {
    const tableHeadTitle = ["Date", "Type", "Category", "Comment", "Summ", "Balance"]

    return (
        <Table>
            <Thead>
            <tr>
                {tableHeadTitle.map(el => <Th>{el}</Th>)}
            </tr>
        </Thead>
        </Table>
        
        
    )
}

export default TableHead