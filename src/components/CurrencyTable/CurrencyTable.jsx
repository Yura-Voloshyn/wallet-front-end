import { useEffect } from 'react';

import setDataFromApi from 'services/api/getCurrency/getDataCurrency';
import {
  CurrencyTableStyled,
  CurrencyTableHead,
  CurrencyTableTr,
  CurrencyHeadItem,
  CurrencyTableBody,
} from './CurrencyTable.styled';

const options = ['Currency', 'Purchase', 'Sale'];

const convertCurrencyCode = {
  840: 'USD',
  978: 'EUR',
};

const CurrencyTable = () => {
  const data = JSON.parse(localStorage.getItem('currency'));
  useEffect(() => {
    const interval = setInterval(() => {
      setDataFromApi();
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CurrencyTableStyled>
      <CurrencyTableHead>
        <CurrencyTableTr>
          {options.map(option => (
            <CurrencyHeadItem key={option}>{option}</CurrencyHeadItem>
          ))}
        </CurrencyTableTr>
      </CurrencyTableHead>
      <CurrencyTableBody>
        {data.map(value => {
          return (
            <CurrencyTableTr key={value.rateBuy}>
              <td>{convertCurrencyCode[value.currencyCodeA]}</td>
              <td>{(+value.rateBuy).toFixed(2).toString()}</td>
              <td>{(+value.rateSell).toFixed(2).toString()}</td>
            </CurrencyTableTr>
          );
        })}
      </CurrencyTableBody>
    </CurrencyTableStyled>
  );
};

export default CurrencyTable;
