import { Pie } from 'react-chartjs-2';
import { ChartContainer } from './Diogram.styled';
// import Chart from 'chart.js/auto';

export function Diogram() {
  const totalBalance = '₴ 24 000.00'; // test balance
  const obj = {
    data: [150, 50, 100, 40, 20, 30, 30, 10],
    backgroundColor: [
      '#FED057',
      '#FFD8D0',
      '#FD9498',
      '#C5BAFF',
      '#6E78E8',
      '#4A56E2',
      '#81E1FF',

      '#24CCA7',
      '#00AD84',
    ],
  }; // test object with bgColor and size for diogram

  const data = {
    type: 'doughnut',
    datasets: [
      {
        data: obj.data,
        backgroundColor: obj.backgroundColor,

        borderWidth: 0,
        hoverOffset: 4,
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
        const text = totalBalance,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <ChartContainer>
      <Pie data={data} options={{ cutout: '70%' }} plugins={plugins} />
    </ChartContainer>
  );
}
