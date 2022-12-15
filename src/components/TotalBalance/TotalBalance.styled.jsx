import styled from '@emotion/styled';

export const TotalBalanceWrapper = styled.div`
  /* margin-top: 28px; */
  width: 280px;
  /* margin-top: 12px; */
  height: 80px;
  border-radius: 30px;

  padding-top: 8px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 336px;
    margin-top: 28px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;
export const Title = styled.p`
  padding-left: 40px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: #a6a6a6;
  margin: 0 0 12px 0;
`;
export const Balance = styled.p`
  padding-left: 40px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
  margin: 0;
`;
