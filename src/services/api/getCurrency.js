import axios from 'axios';
const CURRENCY_URL = 'https://api.monobank.ua/bank/currency';

const getCurrency = async () => {
  const res = await axios.get(CURRENCY_URL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
  });
  return res.data.slice(0, 3);
};

// function getCurrency() {
//   return fetch(CURRENCY_URL, {
//     method: 'GET',
//     crossorigin: true,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     },
//     mode: 'no-cors',
//   }).then(res => {
//     console.log(res);
//     if (res.status === 404) {
//       return Promise.reject(new Error());
//     } else {
//       return res.json();
//     }
//   });
// }

export default getCurrency;
