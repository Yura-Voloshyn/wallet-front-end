import {
  CurrencyTableStyled,
  CurrencyTableHead,
  CurrencyTableTr,
  CurrencyHeadItem,
  CurrencyTableBody,
} from './CurrencyTable.styled';
const options = ['Currency', 'Purchase', 'Sale'];
const data = [
  {
    ccy: 'EUR',
    base_ccy: 'UAH',
    buy: '19.20000',
    sale: '20.00000',
  },
  {
    ccy: 'USD',
    base_ccy: 'UAH',
    buy: '15.50000',
    sale: '15.85000',
  },
  {
    ccy: 'rus',
    base_ccy: 'UAH',
    buy: '0.00',
    sale: '0.00',
  },
];
const CurrencyTable = () => {
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
            <CurrencyTableTr key={value.ccy}>
              <td>{value.ccy}</td>
              <td>{(+value.buy).toFixed(2).toString()}</td>
              <td>{(+value.sale).toFixed(2).toString()}</td>
            </CurrencyTableTr>
          );
        })}
      </CurrencyTableBody>
    </CurrencyTableStyled>
  );
};

export default CurrencyTable;
