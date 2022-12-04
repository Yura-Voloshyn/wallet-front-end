import styled from '@emotion/styled'
import TotalBalance from 'components/totalBalance/total-balance'
import Table from 'components/table/table'
import NavigationsHome from 'components/navigationsHome/navigationsHome'

const HomeContainer = styled.div`
     width: 1280px;
     display: flex;
     background-color: rgba(255, 255, 255, 0.4);
     padding-left: 18px;
`
const CurrencyContainer = styled.div`
    height: 100vh;
    width: 480px;
    border-right: 1px solid #E7E5F2;
`
const TableContainer = styled.div`
    margin-top: 46px;
    margin-right: auto;
    margin-left: auto;
`

const Home = () => {
return (
    <HomeContainer>
        <CurrencyContainer>
                <NavigationsHome/>
                <TotalBalance/>
        </CurrencyContainer>
        <TableContainer>
            <Table/>
        </TableContainer>

    </HomeContainer>

)
}

export default Home