import { Doughnut } from 'react-chartjs-2';
import { ChartContainer } from './Diogram.styled';
import 'chart.js/auto';
import { checkCategoryName } from 'helpers/checkCategoryName';
import { useTotalSum } from 'components/TotalSumContextProvider/TotalSumContextProvider';

export function Diogram({ categoryStatistics }) {
  const { balance } = useTotalSum();

  const categoryWithColor = [];

  for (const arr of checkCategoryName) {
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
    labels: categoryWithColor.map(res => res.name),
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

        const text = balance;

        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
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
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
  };

  return (
    <ChartContainer>
      <Doughnut data={data} options={options} plugins={plugins}  />
    </ChartContainer>
  );
}
