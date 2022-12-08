import styled from '@emotion/styled'

export const TableStyle = styled.table`
    display: none;
    @media (min-width: 321px) {
        display: block;
    }
    width: 715px;
    border-collapse: collapse;

    @media (max-width: 768px) {
        width: 704px;
    }

`
export const Tr = styled.tr`
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

export const Trb = styled.tr`
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
    color: ${color => color.color};
    }
    & td:nth-child(6) {
    padding-right: 20px;
    text-align: end;
    }
`

export const TableMob = styled.table`

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

export const Trm = styled.tr`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 140px;
    & td:last-child {
        border: none;
    }
`

export const Tdm = styled.td`
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

export const Tdhm = styled.td`
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
export const Tds = styled.td`
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