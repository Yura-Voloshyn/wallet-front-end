import Select from 'react-select';
import './SelectData.scss'
 import { YEAR, MONTH } from 'helpers/selectData';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { statistics } from 'redux/statistics/statisticsOperation';
export function SelectData() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear(); 
 const dispatch = useDispatch()
  const [data, setData] = useState({
    month: currentMonth.toString(),
    year: currentYear.toString(),
  });
  
  useEffect(() => {

    dispatch(statistics(data));
  }, [data]);
  
  return (
    <div className="dropdownWrapper">
      <Select
        options={MONTH}
        name="month"
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Month"
        onChange={month => setData(prev => ({ ...prev, month: month.value }))}
      />
      <Select
        options={YEAR}
        name="year"
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Year"
        onChange={year => setData(prev => ({ ...prev, year: year.value }))}
      />
    </div>
  );
}
