import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
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
  const [categoryStatistics, setCategoryStatistics] = useState(null);
  const statistics = useSelector(store => store.statistics);
  const totalCategories = statistics.data.map(res => res.totalCategories);

  

  useEffect(() => {
    totalCategories.forEach(element => {
    setCategoryStatistics(element);
    });
   
  }, []);

  

  // const testArrCategories = [
  //   { id: 1, name: 'Main expenses',  color: '#FED057' },
  //   { id: 2, name: 'Products', color: '#FFD8D0' },
  //   { id: 3, name: 'Car',  color: '#FD9498' },
  //   { id: 4, name: 'Self care',  color: '#C5BAFF' },
  //   { id: 5, name: 'Child care',  color: '#6E78E8' },
  //   { id: 6, name: 'Household products',  color: '#4A56E2' },
  //   { id: 7, name: 'Education',  color: '#81E1FF' },
  //   { id: 8, name: 'Leisure',  color: '#24CCA7' },
  //   { id: 9, name: 'Other expenses',  color: '#00AD84' },
  // ];

  

  return (
    <StatisticsSection>
      <StatisticsWrapper>
        {categoryStatistics !== null && (
          <>
            <StatisticsLeftPartWrapp>
              <StatisticsTitle>Statistics</StatisticsTitle>
              <Diogram categoryStatistics={categoryStatistics} />
            </StatisticsLeftPartWrapp>
            <StatisticsDataWrapper>
              <SelectData />
              <TableStatistics
                categoryStatistics={categoryStatistics}
                incomeAndExpense={statistics}
              />
            </StatisticsDataWrapper>
          </>
        )}
      </StatisticsWrapper>
    </StatisticsSection>
  );
}
