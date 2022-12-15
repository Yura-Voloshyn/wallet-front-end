import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.4);
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
export const CurrencyContainer = styled.div`
  @media (min-width: 1280px) {
    height: 100vh;
    padding-right: 70px;
    border-right: 1px solid #e7e5f2;
    box-shadow: 1px 0px 0px rgb(255 255 255 / 60%);
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const OnTanbletWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  /* height: 100vh; */

  margin-top: 32px;

  @media (min-width: 768px) and (max-width: 1280px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
  }
  @media (min-width: 1280px) {
    margin-top: 46px;
    margin-left: auto;
  }
`;

export const StatisticsContainer = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) and (max-width: 1280px) {
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
  }
  @media (min-width: 1280px) {
    margin-top: 32px;
    margin-left: auto;
  }
`;
