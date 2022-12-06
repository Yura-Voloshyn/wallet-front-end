import { Doughnut } from 'react-chartjs-2';
import { ChartContainer } from './Diogram.styled';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

export function Diogram({ categoryStatistics }) {
  const totalBalance = '₴ 24 000.00'; // test balance

  const data = {
    type: 'Doughnut',
    labels: categoryStatistics.map(res => ` ${res.name}`),
    datasets: [
      {
        data: categoryStatistics.map(res => res.value),
        backgroundColor: categoryStatistics.map(res => res.color),

        borderWidth: 0,
        hoverOffset: 5,
      },
    ],
  };
console.log(data.labels);
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
        const text = totalBalance,
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

    // parsing: {
    //   xAxisName: 'name',
    //   // yAxisKey: 'nested.value',
    // },
  };

  return (
    <ChartContainer>
      <Doughnut data={data} options={options} plugins={plugins} />
    </ChartContainer>
  );
}
