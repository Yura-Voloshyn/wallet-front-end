import styled from '@emotion/styled'

const Tr = styled.tr`
    height: 58px;
 
    border-radius: 30px;
    color: rgba(0, 0, 0, 1);
    font-family: 'Circe Bold';
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
    & th{
            background-color: rgba(255, 255, 255, 1);
        }

        & th:nth-child(1) {
            border-radius: 30px 0 0 30px;
            width: 110px;
            padding-left: 20px;
            text-align: start;
        }

        & th:nth-child(2) {
            width: 84px;
            text-align: start;
        }

        & th:nth-child(3) {
            width: 146px;
            text-align: start;
        }

        & th:nth-child(4) {
            width: 161px;
            text-align: start;
        }
        & th:nth-child(5) {
            width: 93px;
            text-align: end;
        }
        & th:nth-child(6) {
            border-radius: 0 30px 30px 0;
            width: 110px;
            padding-right: 20px;
            text-align: end;
        }

    
`
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