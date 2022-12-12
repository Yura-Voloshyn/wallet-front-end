export const MONTH = [
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
];

let maxOffset = 6;
let thisYear = new Date().getFullYear();
let YEARS = [];
for (let i = 0; i <= maxOffset; i++) {
  const year = thisYear - i;
  YEARS.push({
    label: `${year}`,
    value: `${year}`,
  });
}
export { YEARS }