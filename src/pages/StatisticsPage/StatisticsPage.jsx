import { Diogram } from 'components/Diogram /Diogram';
import { SelectData } from 'components/SelectData/SelectData';
import { TableStatistics } from '../../components/TableStatistics/TableStatistics';

import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsWrapper,
  StatisticsDataWrapper,
  StatisticsLeftPartWrapp,
} from './StatisticsPage.styled';

export function StatisticsPage() {
  return (
    <StatisticsSection>
      <StatisticsWrapper>
        <StatisticsLeftPartWrapp>
          <StatisticsTitle>Statistics</StatisticsTitle>
          <Diogram />
        </StatisticsLeftPartWrapp>

        <StatisticsDataWrapper>
          <SelectData />
          <TableStatistics />
        </StatisticsDataWrapper>
      </StatisticsWrapper>
    </StatisticsSection>
  );
}
