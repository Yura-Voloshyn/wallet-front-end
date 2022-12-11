import styled from '@emotion/styled';
import currencyCurveMobile from '../../images/background/mobile/currencyCurve_mobile1x.png';
import currencyCurveTablet from '../../images/background/tablet/currencyCurve_tablet1x.png';
import currencyCurveDesktop from '../../images/background/desktop/currencyCurve_desktop1x.png';

export const CurrencyWrapper = styled.div`
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  width: 280px;
  height: 174px;
  overflow: auto;
  /* overflow-y: visible; */
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

// export const CurrencyHeadList = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 11px 20px;
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 30px 30px 0 0;
// `;

// export const CurrencyHeadItem = styled.li`
//   color: #ffffff;
//   font-family: 'Circe';
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 1.5;
// `;
