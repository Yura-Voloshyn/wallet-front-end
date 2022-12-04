const CURRENCY_URL =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';
function getCurrency() {
  return fetch(CURRENCY_URL, {
    method: 'GET',
    crossorigin: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
  }).then(res => {
    console.log(res);
    if (res.status === 404) {
      return Promise.reject(new Error());
    } else {
      return res.json();
    }
  });
}

export default getCurrency;
