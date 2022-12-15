import getCurrency from './getCurrency';
const getData = async () => {
  try {
    const apiData = await getCurrency();
    localStorage.setItem('currency', JSON.stringify(apiData));
  } catch (error) {
    console.log(error);
  }
};

export default getData;
