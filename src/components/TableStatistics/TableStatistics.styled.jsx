import styled from '@emotion/styled';

export const Table = styled.table`
  border-spacing: 0px;
  width: 100%;
`;

export const TableHead = styled.thead`
  align-items: center;
  background-color: #ffffff;
  font-family: Circe, sans-serif;
  font-weight: 700;
  font-size: 18px;

  @media (min-width: 768px) {
    padding: 15px 30px;
  }

  th {
    padding: 15px 0px 16px 0px;
  }

  th:first-of-type {
    text-align: start;
    padding-left: 20px;
    border-radius: 30px 0px 0px 30px;
  }

  th:last-child {
    text-align: end;
    padding-right: 20px;
    border-radius: 0px 30px 30px 0px;
  }
`;
export const TableHeadName = styled.th`
  
  background-color: transparent;
`;

export const TableBody = styled.tbody`
  td {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0 5px 4px -5px rgb(255 255 255 / 60%);
    font-family: Circe, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.13;
    padding-top: 15px;
    padding-bottom: 15px;
   
  }
`;

export const Square = styled.div`
  display: inline-flex;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-right: 15px;

  margin-left: 20px;
 
`;

export const TableCategories = styled.td`
  vertical-align: baseline;
  &:first-of-type {
    align-items: center;
  }

  &:last-child {
    text-align: right;
    padding-right: 15px;
  }
  @media (min-width: 768px) {
    &:last-child {
      padding-right: 20px;
    }
    
  }
`;

export const TableFoot = styled.tfoot`
  
  th,
  td {
    font-family: Circe, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
  }
`;



export const FootTitle = styled.th`
  padding-left: 20px;
  text-align: left;
`;
export const Expenses = styled.td`
  text-align: right;

  padding-top: 15px;
  padding-bottom: 10px;
  padding-right: 15px;
  color: #ff6596;

  @media (min-width: 768px) {
    padding-right: 20px;
  }
`;
export const Incomes = styled.td`
  text-align: right;
  padding-right: 15px;
  color: #24cca7;

  @media (min-width: 768px) {
    padding-right: 20px;
  }
`;

export const NoTransactions = styled.td`
  color: red;
  vertical-align: baseline;
  align-items: center;
  
  &:last-child {
    text-align: right;
    padding-right: 20px;
  }
`;