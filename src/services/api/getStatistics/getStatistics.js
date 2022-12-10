import axios from 'axios';

import instance from '../auth';


const getStatistics = async (data) => {
   console.log(data)
   const response = await instance.post('/api/transactions/statistic', data);
   
   return response;
}

export default getStatistics;