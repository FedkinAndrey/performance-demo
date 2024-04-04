import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const PerformanceComparisonChart = ({ originalTime, optimizedTime }) => {
  const data = {
    labels: ['Original', 'Optimized'],
    datasets: [
      {
        label: 'Computation Time (ms)',
        data: [originalTime, optimizedTime],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true }} />;
};

export default PerformanceComparisonChart;
