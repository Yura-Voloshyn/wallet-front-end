import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Diogram } from '../../components/Diogram/Diogram';
import { SelectData } from '../../components/SelectData/SelectData';
import { TableStatistics } from '../../components/TableStatistics/TableStatistics';

import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsDataWrapper,
  StatisticsLeftPartWrapp,
} from './StatisticsPage.styled';

export function StatisticsPage() {
  const [categoryStatistics, setCategoryStatistics] = useState([]);
  // const transactions = useSelector(store => store.transactions.transactions);

  // useEffect(() => {
  //   const result = transactions
  //     .map(res => res)
  //     .filter(res => res.type === false);

  //   // let newObj = {};

  //   let newObj = { category: null, sum: null };
  //   for (let i = 0; i < result.length - 1; i++) {
  //     for (let j = i + 1; j < result.length; j++) {
  //       if (result[i].category === result[j].category) {
  //         newObj.category = result[i].category;
  //         newObj.sum = result[i].sum + result[j].sum;

  //         if (newObj.category === result[i].category && newObj.category === result[j].category) {

  //           result.splice(j, 1);
  //           result.splice(i, 1 , newObj);
  //         }
  //       }
  //     }

  //   }

  //   console.log(result);
  //   // console.log(result);
  //   setCategoryStatistics(result);
  // }, []);

  const testArrCategories = [
    { id: 1, name: 'Main expenses', value: '8700.00', color: '#FED057' },
    { id: 2, name: 'Products', value: '3800.74', color: '#FFD8D0' },
    { id: 3, name: 'Car', value: '1500.00', color: '#FD9498' },
    { id: 4, name: 'Self care', value: '800.00', color: '#C5BAFF' },
    { id: 5, name: 'Child care', value: '2208.50', color: '#6E78E8' },
    { id: 6, name: 'Household products', value: '300.00', color: '#4A56E2' },
    { id: 7, name: 'Education', value: '3400.00', color: '#81E1FF' },
    { id: 8, name: 'Leisure', value: '1230.00', color: '#24CCA7' },
    { id: 9, name: 'Other expenses', value: '610.00', color: '#00AD84' },
  ];

  useEffect(() => {
    const getCategoryStatistics = data => {
      setCategoryStatistics(data);
    };
    getCategoryStatistics(testArrCategories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StatisticsSection>
      <StatisticsWrapper>
        {categoryStatistics !== undefined && (
          <>
            <StatisticsLeftPartWrapp>
              <StatisticsTitle>Statistics</StatisticsTitle>
              <Diogram categoryStatistics={categoryStatistics} />
            </StatisticsLeftPartWrapp>
            <StatisticsDataWrapper>
              <SelectData />
              <TableStatistics categoryStatistics={categoryStatistics} />
            </StatisticsDataWrapper>
          </>
        )}
      </StatisticsWrapper>
    </StatisticsSection>
  );
}
