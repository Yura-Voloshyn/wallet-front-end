import { useState, useEffect } from 'react';
import localStorage from 'redux-persist/es/storage';
import getCurrency from '../../services/api/getCurrency/getCurrency';
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const apiData = await getCurrency();
        localStorage.setItem('currency', JSON.stringify(apiData));
        console.log(apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
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
