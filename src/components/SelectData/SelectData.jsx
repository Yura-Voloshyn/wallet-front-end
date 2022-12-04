import Select from 'react-select';
import './SelectData.scss'


export function SelectData() {
  const MONTH = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ]; // test month
  const YEAR = [
    { label: '2012', value: '2012' },
    { label: '2013', value: '2013' },
    { label: '2014', value: '2014' },
    { label: '2015', value: '2015' },
    { label: '2016', value: '2016' },
    { label: '2017', value: '2017' },
    { label: '2018', value: '2018' },
    { label: '2019', value: '2019' },
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
  ]; // test year
  return (
    <div className="dropdownWrapper">
      <Select
        options={MONTH}
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Month"
      />
      <Select
        options={YEAR}
        className="selectMonthYear"
        classNamePrefix="selectMonthYearPrefix"
        placeholder="Year"
      />
    </div>
  );
}
