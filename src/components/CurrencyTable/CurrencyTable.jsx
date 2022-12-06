import { useState, useEffect } from 'react';
import getCurrency from '../../services/api/getCurrency.js';
import {
  CurrencyTableStyled,
  CurrencyTableHead,
  CurrencyTableTr,
  CurrencyHeadItem,
  CurrencyTableBody,
} from './CurrencyTable.styled';
const options = ['Currency', 'Purchase', 'Sale'];

// const data = fetchCurrency();
// console.log(data);
// const data = [
//   {
//     ccy: 'EUR',
//     base_ccy: 'UAH',
//     buy: '19.20000',
//     sale: '20.00000',
//   },
//   {
//     ccy: 'USD',
//     base_ccy: 'UAH',
//     buy: '15.50000',
//     sale: '15.85000',
//   },
//   {
//     ccy: 'rus',
//     base_ccy: 'UAH',
//     buy: '0.00',
//     sale: '0.00',
//   },
// ];
const CurrencyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const apiData = await getCurrency();

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
              <td>{value.currencyCodeA}</td>
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
