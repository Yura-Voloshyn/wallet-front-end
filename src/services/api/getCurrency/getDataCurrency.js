import getCurrency from './getCurrency';
const setDataFromApi = async () => {
  try {
    const apiData = await getCurrency();
    localStorage.setItem('currency', JSON.stringify(apiData));
  } catch (error) {
    console.log(error);
  }
};

export default setDataFromApi;
