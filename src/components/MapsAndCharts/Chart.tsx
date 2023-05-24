import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  CategoryScale,
  PointElement,
} from "chart.js";

interface CaseData {
  date: string;
  cases: any;
}

ChartJS.register(LinearScale, LineElement, CategoryScale, PointElement);

const ChartComponent: FC<{
  data: CaseData[];
  dataPointLimit: number;
}> = ({ data, dataPointLimit = 100 }) => {
  // Filter the data array based on the desired date range

  const stepSize = Math.ceil(data.length / dataPointLimit);

  const chartData = {
    labels: data.map((entry, index) => entry.date),
    datasets: [
      {
        label: "Cases",
        data: data.map((entry) => entry.cases as number),
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: false,
        tension: 0.1,
        borderWidth: 0.5,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Cases",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "270px",
      }}
    >
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
