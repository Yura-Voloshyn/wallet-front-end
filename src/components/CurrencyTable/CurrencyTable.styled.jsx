import styled from '@emotion/styled';

export const CurrencyTableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #ffffff;
  line-height: 1.5;
  text-align: left;

  & th {
    padding: 12px 0;
  }
  & td {
    padding: 12px 0 0 0;
  }
`;

export const CurrencyTableHead = styled.thead`
  /* color: #ffffff; */
  background-color: rgba(255, 255, 255, 0.2);
  & th:first-of-type {
    padding-left: 20px;
  }
  & th:last-of-type {
    padding-right: 20px;
  }
`;
export const CurrencyTableTr = styled.tr`
  /* border-radius: 30px 30px 0px 0px; */
`;
export const CurrencyHeadItem = styled.th`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;

  padding: 11px 0px;
`;

export const CurrencyTableBody = styled.tbody`
  & td:first-of-type {
    padding-left: 20px;
  }
`;

export const CurrencyTableTd = styled.td`
  font-size: 16px;
  font-weight: 400;
`;
