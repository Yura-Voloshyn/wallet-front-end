import instance from '../auth';

const getStatistics = async data => {
  const response = await instance.post('/api/transactions/statistic', data);

  return response;
};

export default getStatistics;
