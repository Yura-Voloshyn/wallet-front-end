import styled from '@emotion/styled';

export const StatisticsSection = styled.section``;

export const StatisticsTitle = styled.h1`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  color: #000000;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;

  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
export const StatisticsLeftPartWrapp = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }
`;
export const StatisticsDataWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  @media (min-width: 1280px) {
    margin-top: 65px;
  }
`;
