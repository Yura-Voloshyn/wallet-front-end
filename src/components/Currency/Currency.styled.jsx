import styled from '@emotion/styled';
import currencyCurveMobile from '../../images/background/mobile/currencyCurve_mobile1x.png';
import currencyCurveTablet from '../../images/background/tablet/currencyCurve_tablet1x.png';
import currencyCurveDesktop from '../../images/background/desktop/currencyCurve_desktop1x.png';

export const CurrencyWrapper = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 20px;
  }
  width: 280px;
  height: 174px;
  overflow: auto;
  
  background-color: #4a56e2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background-image: url(${currencyCurveMobile});
  background-repeat: no-repeat;
  background-position: center bottom;
  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
    background-image: url(${currencyCurveTablet});
    margin-top: 32px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
    background-image: url(${currencyCurveDesktop});
  }
`;


