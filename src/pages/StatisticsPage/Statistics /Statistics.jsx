import { Diogram } from 'pages/StatisticsPage/Diogram /Diogram';
import { SelectData } from 'pages/StatisticsPage/SelectData/SelectData';
import { CategoryStatistics } from '../CategoryStatistics/CategoryStatistics';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsDataWrapper,
  StatisticsLeftPartWrapp,
} from './Statistics.styled';

export function Statistics() {
  return (
    <StatisticsSection>
  
      <StatisticsWrapper>
        
        <StatisticsLeftPartWrapp>
             <StatisticsTitle>Statistics</StatisticsTitle>
          <Diogram />
        </StatisticsLeftPartWrapp>

        <StatisticsDataWrapper>
          <SelectData />
          <CategoryStatistics />
        </StatisticsDataWrapper>
      </StatisticsWrapper>
    </StatisticsSection>
  );
}
