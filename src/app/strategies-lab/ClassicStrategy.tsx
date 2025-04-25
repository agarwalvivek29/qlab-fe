'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler, CategoryScale);

const sampleData = [
  { symbol: 'NIFTY 30APR 23850 CE' },
  { symbol: 'NIFTY 30APR 23850 PE' },
  { symbol: 'NIFTY 30APR 23900 CE' },
  { symbol: 'NIFTY 30APR 23900 PE' },
  { symbol: 'NIFTY 30APR 23950 CE' },
  { symbol: 'NIFTY 30APR 23950 PE' },
  { symbol: 'NIFTY 30APR 24000 CE' },
  { symbol: 'NIFTY 30APR 24000 PE' },
];

// Data for the payoff chart
const labels = [
  23750, 23800, 23850, 23900, 23950, 24000, 24050, 24100, 24150, 24200, 24250, 24300, 24350, 24400, 24450, 24500, 24550,
];
const payoffData = [
  100000, 83333, 66666, 50000, 33333, 16666, 0, -33333, -66666, -100000, -66666, -33333, 0, 33333, 66666, 83333, 100000,
];

// Split data into positive (green) and negative (red) portions with overlap at 0
const positiveData = payoffData.map(value => (value >= 0 ? value : null));
const negativeData = payoffData.map((value, index) => {
  if (value < 0) return value;
  // Include 0 at the transition points to connect the red line to the green line
  if (index === 6 || index === 12) return 0; // Indices where payoff crosses 0
  return null;
});

// Chart configuration
const chartData = {
  labels: labels,
  datasets: [
    {
      label: 'Payoff (Positive)',
      data: positiveData,
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.1)', // Light green fill for positive portion
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      segment: {
        borderColor: (ctx: any) => {
          return 'green';
        },
      },
    },
    {
      label: 'Payoff (Negative)',
      data: negativeData,
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red fill for negative portion
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      segment: {
        borderColor: (ctx: any) => {
          return 'red';
        },
      },
    },
  ],
};

// Chart options
import { ChartOptions } from 'chart.js';

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'PAYOFF CHART',
      font: {
        size: 16,
        weight: 700,
      },
    },
  },
  scales: {
    x: {
      type: 'linear',
      title: {
        display: true,
        text: 'Underlying Price',
      },
      ticks: {
        stepSize: 50,
      },
    },
    y: {
      type: 'linear',
      title: {
        display: true,
        text: 'Profit & Loss',
      },
      ticks: {
        callback: (tickValue: number | string) => {
          const value = typeof tickValue === 'number' ? tickValue : parseFloat(tickValue);
          return `${value / 1000}K`;
        },
        stepSize: 50000,
      },
      min: -100000,
      max: 100000,
    },
  },
};

export default function ClassicStrategy() {
  const [rows, setRows] = useState(sampleData);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen p-6 gap-4">
      {/* Orders Table */}
      <div className="w-full border rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Payoff Chart</h2>

        <div className="flex justify-between items-center mb-4 px-4 py-2 border rounded bg-gray-50">
          {/* Left side: Profit & Loss */}
          <div className="flex gap-6 text-sm font-medium">
            <div>
              Max Profit: <span className="text-green-600">Unlimited</span>
            </div>
            <div>
              Max Loss: <span className="text-red-600">-94,507.50</span>
            </div>
          </div>

          {/* Right side: Product Type Dropdown */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-gray-600">Product Type</span>
            <div className="flex items-center px-3 py-1 border rounded bg-white cursor-pointer hover:bg-gray-100">
              <span>NRML</span>
              <svg
                className="w-4 h-4 ml-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="px-2 py-2">Symbol</th>
                <th className="px-2">Order Side</th>
                <th className="px-2">Qty</th>
                <th className="px-2">Order Type</th>
                <th className="px-2">Mkt. Pro.</th>
                <th className="px-2">LTP</th>
                <th className="px-2">Order Price</th>
                <th className="px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-2 py-2">
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-black">{row.symbol}</span>
                      <span className="text-xs text-gray-500">NSEFO</span>
                    </div>
                  </td>
                  <td className="px-2">
                    <div className="flex items-center gap-1">
                      <span>B</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-10 h-5 bg-gray-300 peer-checked:bg-green-500 rounded-full peer"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
                      </label>
                      <span>S</span>
                    </div>
                  </td>
                  <td className="px-2">
                    <input type="number" defaultValue={75} className="w-16 border p-1 rounded text-center" />
                  </td>
                  <td className="px-2">
                    <select className="border p-1 rounded text-sm">
                      <option>MARKET</option>
                      <option>LIMIT</option>
                    </select>
                  </td>
                  <td className="px-2">
                    <input type="number" value={0} className="w-14 border p-1 rounded text-center" />
                  </td>
                  <td className="px-2">
                    <input type="number" placeholder="LTP" className="w-16 border p-1 rounded text-center" />
                  </td>
                  <td className="px-2">
                    <input type="number" placeholder="Price" className="w-16 border p-1 rounded text-center" />
                  </td>
                  <td className="px-2">
                    <button className="text-red-500 hover:text-red-700 text-lg">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-gray-500 text-sm">Req. Margin</span>
            <div className="text-xl font-semibold text-blue-600">₹109623.75</div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="text-orange-600 border-orange-500">
              ADD TO LEGS
            </Button>
            <Button className="bg-orange-600 text-white hover:bg-orange-700">
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>

      {/* Chart Now at Bottom */}
      <div className="w-full border rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-2">PAYOFF CHART</h2>
        <div className="w-full h-[400px] bg-gray-100 border rounded">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}