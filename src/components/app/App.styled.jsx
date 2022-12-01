import styled from '@emotion/styled';
import backgroundBot from '../../images/background/Ellipse1.png';
import backgroundTop from '../../images/background/Ellipse2.png';

export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  font-family: 'circe';
  justify-content: center;
  align-items: center;
  color: '#010101';
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    background-image: url(${backgroundBot}), url(${backgroundTop});
    background-position: left bottom, right top;
    background-position-x: -146px, 402px;
    background-position-y: 716px, -117px;
    background-repeat: no-repeat, no-repeat;
    background-size: 630px 486px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;

    background-position-x: -143px, 732px;
    background-position-y: 395px, -122px;
  } ;
`;
