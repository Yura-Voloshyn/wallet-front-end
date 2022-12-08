import { useEffect, useState } from 'react';
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

  // const testArrCategories = [
  //   { id: 1, name: 'Main expenses', value: '8700.00', color: '#FED057' },
  //   { id: 2, name: 'Products', value: '3800.74', color: '#FFD8D0' },
  //   { id: 3, name: 'Car', value: '1500.00', color: '#FD9498' },
  //   { id: 4, name: 'Self care', value: '800.00', color: '#C5BAFF' },
  //   { id: 5, name: 'Child care', value: '2208.50', color: '#6E78E8' },
  //   { id: 6, name: 'Household products', value: '300.00', color: '#4A56E2' },
  //   { id: 7, name: 'Education', value: '3400.00', color: '#81E1FF' },
  //   { id: 8, name: 'Leisure', value: '1230.00', color: '#24CCA7' },
  //   { id: 9, name: 'Other expenses', value: '610.00', color: '#00AD84' },
  // ];
  const testArrCategories = [
    {
      _id: {
        $oid: '638f45c0cf480d0c0f987adb',
      },
      date: '12122022',
      type: true,
      category: 'car',
      comment: 'gassoline',
      sum: 1000,
      balance: 1000,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670333888233',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670333888481',
        },
      },
    },
    {
      _id: {
        $oid: '638f45facf480d0c0f987ae0',
      },
      date: '12122022',
      type: true,
      category: 'car',
      comment: 'oil',
      sum: 500,
      balance: 1500,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670333946693',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670333946932',
        },
      },
    },
    {
      _id: {
        $oid: '638f94ffea668ea26a9dc79d',
      },
      date: '12122022',
      type: false,
      category: 'car',
      comment: 'oil',
      sum: 500,
      balance: 1000,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670354175168',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670354175411',
        },
      },
    },
    {
      _id: {
        $oid: '638f9518ea668ea26a9dc7a2',
      },
      date: '12122022',
      type: false,
      category: 'car',
      comment: 'oil',
      sum: 100,
      balance: 900,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670354200356',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670354200593',
        },
      },
    },
    {
      _id: {
        $oid: '638f9550ea668ea26a9dc7a7',
      },
      date: '12122022',
      type: false,
      category: 'Education',
      comment: 'goit',
      sum: 700,
      balance: 200,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670354256267',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670354256506',
        },
      },
    },
    {
      _id: {
        $oid: '638f9550ea668ea26a9dc7a7',
      },
      date: '12122022',
      type: false,
      category: 'Education',
      comment: 'goit',
      sum: 300,
      balance: 200,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670354256267',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670354256506',
        },
      },
    },
    {
      _id: {
        $oid: '638f9550ea668ea26a9dc7a7',
      },
      date: '12122022',
      type: false,
      category: 'Sport',
      comment: 'goit',
      sum: 300,
      balance: 200,
      owner: {
        $oid: '638f25da0ee10de60d6f0980',
      },
      createdAt: {
        $date: {
          $numberLong: '1670354256267',
        },
      },
      updatedAt: {
        $date: {
          $numberLong: '1670354256506',
        },
      },
    },
  ];

  useEffect(() => {
    const categoriesFilter = data => {
      const result = data.map(res => res).filter(res => res.type === false);

      let newArr = {};
      for (let i = 0; i < result.length - 1; i++) {
        for (let j = i; j < result.length; j++) {
          if (result[i].category === result[j].category) {
            
            newArr[result[i].category] = result[i].sum + result[j].sum;

            result.splice(result[i], 2);
          }
        }
      } // нужно придумать чтобы пушился обьект с ключом category: name, sum: value


      result.push(newArr);
      
      console.log(result);
      setCategoryStatistics(result);
    };

    categoriesFilter(testArrCategories);
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
