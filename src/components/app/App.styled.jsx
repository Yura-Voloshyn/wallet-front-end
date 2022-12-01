import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  font-family: 'circe';
  justify-content: center;
  align-items: center;
  color: '#010101';
  font-size: 10px;
  background-color: aqua;
  @media (min-width: 768px) {
    font-size: 20px;
    background-color: orangered;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    background-color: #62ee62;
  } ;
`;
