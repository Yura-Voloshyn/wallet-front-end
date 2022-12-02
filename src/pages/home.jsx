import styled from '@emotion/styled'
import TotalBalance from 'components/totalBalance/total-balance'
import Table from 'components/table/table'

const HomeContainer = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     background-color: rgba(255, 255, 255, 0.4);
     padding-left: 18px;
`
const CurrencyContainer = styled.div`
    height: 100vh;
    width: 480px;
    border-right: 1px solid #E7E5F2;
`

const Home = () => {
return (
    <HomeContainer>
        <CurrencyContainer>
                <TotalBalance/>
        </CurrencyContainer>
        <Table/>
    </HomeContainer>

)
}

export default Home