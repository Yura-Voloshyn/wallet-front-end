

import instance from '../auth';


const getStatistics = async (data) => {
   
   const response = await instance.post('/api/transactions/statistic', data);
  console.log(response)
   return response;
}

export default getStatistics;