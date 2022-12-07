import styled from '@emotion/styled'
import TotalBalance from 'components/TotalBalance/total-balance'
import Table from 'components/Table/table'
import NavigationsHome from 'components/navigationsHome/navigationsHome'

const HomeContainer = styled.div`
     width: 1280px;
     display: flex;
     background-color: rgba(255, 255, 255, 0.4);
     padding-left: 18px;

    @media (max-width: 768px) {
        display: block;
    }
`
const CurrencyContainer = styled.div`
    @media (min-width: 768px) {
        height: 100vh;
        width: 480px;
        border-right: 1px solid #E7E5F2;
    }
`
const TableContainer = styled.div`
    margin-top: 46px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 768px) {
        margin-top: 20px;
    }

    @media (max-width: 320px){
        margin-top: 32px;
    }
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