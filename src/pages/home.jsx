import styled from '@emotion/styled'
import TotalBalance from "components/total-balance"

const HomeContainer = styled.div`
     height: 100vh;
     width: 100%;
     background-color: rgba(255, 255, 255, 0.4);
     padding-left: 18px;
`
const CurrencyWrapper = styled.div`
    height: 100vh;
    width: 480px;
    border-right: 1px solid #E7E5F2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
`

const Home = () => {
return (
    <HomeContainer>
        <CurrencyWrapper>
                <TotalBalance/>
        </CurrencyWrapper>
    </HomeContainer>

)
}

export default Home