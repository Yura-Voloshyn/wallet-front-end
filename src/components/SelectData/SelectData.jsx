import Select from 'react-select';
import './SelectData.scss';
import { YEAR, MONTH } from 'helpers/selectData';

export function SelectData({ setData }) {
  return (
    <div className="dropdownWrapper">
      <Select
        options={MONTH}
        name="month"
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Month"
        onChange={month =>
          setData(prev => ({ ...prev, month: Number(month.value) }))
        }
      />
      <Select
        options={YEAR}
        name="year"
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Year"
        onChange={year =>
          setData(prev => ({ ...prev, year: Number(year.value) }))
        }
      />
    </div>
  );
}
