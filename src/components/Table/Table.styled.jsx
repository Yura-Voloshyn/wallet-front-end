import styled from '@emotion/styled';

export const TableStyle = styled.table`
  max-height: 60vh;
  overflow-y: auto;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  width: 715px;
  border-collapse: collapse;

  @media (max-width: 768px) {
    width: 704px;
  }

  ::-webkit-scrollbar {
    width: 2px; /* ширина для вертикального скролла */
  }

  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
    /* background-color: #843465;
  border-radius: 9em; */
    box-shadow: inset 1px 1px 10px #f3faf7;
  }
`;

export const Tablebody = styled.tbody``;

export const Tr = styled.tr`
  height: 58px;
  border-radius: 30px;
  color: rgba(0, 0, 0, 1);
  font-family: 'Circe Bold';
  font-style: normal;
  font-size: 18px;
  line-height: 27px;
  & th {
    background-color: rgba(255, 255, 255, 1);
  }

  & th:nth-of-type(1) {
    border-radius: 30px 0 0 30px;
    width: 110px;
    padding-left: 20px;
    text-align: start;
  }

  & th:nth-of-type(2) {
    width: 84px;
    text-align: start;
  }

  & th:nth-of-type(3) {
    width: 146px;
    text-align: start;
  }

  & th:nth-of-type(4) {
    width: 161px;
    text-align: start;
  }
  & th:nth-of-type(5) {
    width: 93px;
    text-align: end;
  }
  & th:nth-of-type(6) {
    border-radius: 0 30px 30px 0;
    width: 110px;
    padding-right: 20px;
    text-align: end;
  }
`;

export const Trb = styled.tr`
  height: 52px;
  padding-left: 20px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  & td {
    color: #000000;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  & td:nth-of-type(1) {
    padding-left: 20px;
    text-align: start;
  }
  & td:nth-of-type(2) {
    padding-left: 20px;
    text-align: start;
  }
  & td:nth-of-type(3) {
    text-align: start;
  }
  & td:nth-of-type(4) {
    text-align: start;
  }
  & td:nth-of-type(5) {
    font-family: 'Circe Bold';
    text-align: end;
    color: ${color => color.color};
  }
  & td:nth-of-type(6) {
    padding-right: 20px;
    text-align: end;
  }
`;

export const TableMob = styled.table`
  display: flex;
  width: 280px;
  border-left: 5px solid ${color => color.color};
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Trm = styled.tr`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 140px;
  & td:last-child {
    border: none;
  }
`;

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
  border-bottom: 1px solid #dcdcdf;
`;

export const Tdhm = styled.td`
  display: flex;
  align-items: center;
  height: 43px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  padding-left: 15px;
  border-bottom: 1px solid #dcdcdf;
`;
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
  border-bottom: 1px solid #dcdcdf;
`;
export const TableText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: rgba(255, 101, 150, 1);
  text-align: center;
  padding-top: 20px;
`;
