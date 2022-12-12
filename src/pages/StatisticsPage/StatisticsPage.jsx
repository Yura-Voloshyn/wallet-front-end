import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Diogram } from '../../components/Diogram/Diogram';
import { SelectData } from '../../components/SelectData/SelectData';
import { TableStatistics } from '../../components/TableStatistics/TableStatistics';
import { statistics } from 'redux/statistics/statisticsOperation';
import { Notify } from 'notiflix';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsDataWrapper,
  StatisticsLeftPartWrapp,
} from './StatisticsPage.styled';
import Spinner from 'components/Spinner';

export function StatisticsPage() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const [data, setData] = useState({
    month: currentMonth,
    year: currentYear,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(statistics(data));
  }, [data, dispatch]);

  const statisticsStore = useSelector(store => store.statistics);
  
  
   return (
     <StatisticsSection>
       <StatisticsWrapper>
         {statisticsStore.isLoading === true && <Spinner />}

         {statisticsStore.data.length !== 0 && (
           <>
             
             <StatisticsLeftPartWrapp>
               <StatisticsTitle>Statistics</StatisticsTitle>
               {statisticsStore.data.totalCategories.length !== 0 && (
                 <Diogram
                   categoryStatistics={statisticsStore.data.totalCategories}
                 />
               )}
             </StatisticsLeftPartWrapp>
             <StatisticsDataWrapper>
               <SelectData setData={setData} />
               <TableStatistics
                 categoryStatistics={statisticsStore}
                 incomeAndExpense={statistics}
               />
             </StatisticsDataWrapper>
           </>
         )}
       </StatisticsWrapper>
     </StatisticsSection>
   );
}
