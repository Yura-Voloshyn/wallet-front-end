

import { TotalBalanceWrapper } from "./Total-balance.styled"
import { Title } from "chart.js/dist/types"
import { Balance } from "./Total-balance.styled"

const TotalBalance = () => {
    return (
        <TotalBalanceWrapper>
            <Title>Your balance</Title>
            <Balance>₴ 24 000.00</Balance>

        </TotalBalanceWrapper>
    )
}

export default TotalBalance