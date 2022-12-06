import styled from '@emotion/styled'
import TotalBalance from 'components/totalBalance/total-balance'
import Table from 'components/table/table'
import NavigationsHome from 'components/navigationsHome/navigationsHome'
import ButtonAddTransactions from '../components/Button/ButtonAddTransaction/OpenModalBtn';
// import { useDispatch } from 'react-redux'
import ModalAddTransactions from "../components/ModalAddTransactions/modalAddTransaction"
import { useState } from 'react';

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
    height: 100vh;
    width: 480px;
    border-right: 1px solid #E7E5F2;

    @media (max-width: 768px) {
        border: none;
        height: 0%;
    }
`
const TableContainer = styled.div`
    margin-top: 46px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

const Home = () => {

// const dispatch = useDispatch()
    const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] = useState(false);
    const onCloseModal = () =>{
        setIsModalAddTransactionOpen(false)
    }
    const onOpenModal = () =>{
        setIsModalAddTransactionOpen(true)
    }

return (
    <HomeContainer>
        <CurrencyContainer>
                <NavigationsHome/>
                <TotalBalance/>
        </CurrencyContainer>
        <TableContainer>
            <Table/>
        </TableContainer>
            <ButtonAddTransactions onOpen={onOpenModal} />
            {isModalAddTransactionOpen && <ModalAddTransactions onClose={onCloseModal}/>}
    </HomeContainer>

)
};

export default Home