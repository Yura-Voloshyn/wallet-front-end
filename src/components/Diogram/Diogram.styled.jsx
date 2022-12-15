import styled from '@emotion/styled';
export const ChartContainer = styled.div`
  width: 280px;
  height: 280px;
  margin-bottom: 30px;
  border-radius: 100%;

  animation-name: stretch;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-play-state: running;
  transition: animation 5s linear;
  
  @keyframes stretch {
    0% {
      transform: scale(0.9);
      box-shadow: none;
    }

    50% {
      box-shadow: none;
    }

    100% {
      transform: scale(1);
      box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    }
  }

  @media (min-width: 768px) {
    width: 336px;
    height: 336px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 290px;
    height: 290px;
  }
`;
