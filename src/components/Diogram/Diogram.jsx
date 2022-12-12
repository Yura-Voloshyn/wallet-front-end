import { Doughnut } from 'react-chartjs-2';
import { ChartContainer } from './Diogram.styled';
import { Chart, ArcElement } from 'chart.js';
import { useSelector } from 'react-redux';
Chart.register(ArcElement);

export function Diogram({ categoryStatistics }) {
  const { transactions } = useSelector(state => state.transactions);

  const arrToCheck = [
    { name: 'Main expenses', color: '#FED057' },
    { name: 'Products', color: '#FFD8D0' },
    { name: 'Car', color: '#FD9498' },
    { name: 'Self care', color: '#C5BAFF' },
    { name: 'Child care', color: '#6E78E8' },
    { name: 'Household products', color: '#4A56E2' },
    { name: 'Education', color: '#81E1FF' },
    { name: 'Leisure', color: '#24CCA7' },
    { name: 'Other expenses', color: '#00AD84' },
    { name: 'Entertainment', color: '#c42e10' },
  ];

  const categoryWithColor = [];

  for (const arr of arrToCheck) {
    for (const name of categoryStatistics) {
      if (arr.name.toUpperCase() === name._id.toUpperCase()) {
        categoryWithColor.push({
          name: arr.name,
          color: arr.color,
          value: name.totalSum,
        });
      }
    }
  }

  const data = {
    type: 'Doughnut',

    datasets: [
      {
        data: categoryWithColor.map(res => res.value),

        backgroundColor: categoryWithColor.map(res => res.color),

        borderWidth: 0,
        hoverOffset: 5,
      },
    ],
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();

        ctx.font = '700 18px Circe';
        ctx.fillStyle = '#000000';
        ctx.textBaseline = 'middle';
        const text =
            transactions.length === 0
              ? '0,00'
              : `₴ ${transactions[0].balance},00`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  const options = {
    cutout: '70%',
    animation: {
      animateScale: true,
      duration: 1200,
    },
  };

  return (
    <ChartContainer>
      <Doughnut data={data} options={options} plugins={plugins} />
    </ChartContainer>
  );
}
