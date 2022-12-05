import styled from '@emotion/styled'



const TableBody = ({items}) => {
    return (
        <tbody>
            {items.map(({date, type, category, comment, sum, balance}) => {
                const color = type === "+" ? "rgba(36, 204, 167, 1)" : "rgba(255, 101, 150, 1)";
                const Trb = styled.tr`
                    height: 52px;
                    padding-left: 20px;
                    border-bottom: 1px solid #DCDCDF;
                    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
                    & td{
                    color: #000000;
                    font-family: 'Circe';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                }
                & td:nth-child(1) {
                    padding-left: 20px;
                    text-align: start;
                }
                & td:nth-child(2) {
                    padding-left: 20px;
                    text-align: start;
                }
                & td:nth-child(3) {
                    text-align: start;
                }
                & td:nth-child(4) {
                    text-align: start;
                }
                & td:nth-child(5) {
                    font-family: 'Circe Bold';
                    text-align: end;
                    color: ${color};
                }
                & td:nth-child(6) {
                    padding-right: 20px;
                    text-align: end;
                }
    `
            return (<Trb>
                <td>{date}</td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comment}</td>
                <td>{sum}</td>
                <td>{balance}</td>
            </Trb>)
            }
            

            )}
        </tbody>
    )
}

export default TableBody