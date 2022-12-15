import styled from '@emotion/styled';
import backgroundBot from '../../images/background/Ellipse1.png';
import backgroundTop from '../../images/background/Ellipse2.png';
import { stylistics } from '../../styles/styles';

export const AppWrapper = styled.div`
  color: '#010101';

  background-color: ${stylistics.colors.loginPageBg};
  /* height: 100vh; */
  /* background-color: '#BDBDBD'; */
  @media (min-width: 321px) {
    /* height: 100vh; */
  }

  @media (min-width: 768px) {
    background-image: url(${backgroundBot}), url(${backgroundTop});
    background-position: left bottom, right top;
    background-position-x: -146px, 402px;
    background-position-y: 716px, -117px;
    background-repeat: no-repeat, no-repeat;
    background-size: 630px 486px;
  }
  @media (min-width: 1280px) {
    background-position-x: -143px, 732px;
    background-position-y: 395px, -122px;
  } ;
`;
