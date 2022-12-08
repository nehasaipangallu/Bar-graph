import React from 'react';
import './Revenue.css';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const data = [
  {
    date: '01',
    revenue: 15000,
    actual: 36000,
  },
  {
    date: '05',
    revenue: 47000,
    actual: 55000,
  },
  {
    date: '09',
    revenue: 20000,
    actual: 25500,
  },
  {
    date: '13',
    revenue: 47500,
    actual: 44000,
  },
  {
    date: '17',
    revenue: 42000,
    actual: 48000,
  },
  {
    date: '21',
    revenue: '48.0k',
    actual: '46.5k',
  },
  {
    date: '26',
    revenue: '46.5k',
    actual: '45.0k',
  },
  {
    date: '31',
    revenue: '48.5k',
    actual: '47.0k',
  },
];

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Revenue() {
  return (
    <div class="revenue col-7">
      <h4>Revenue</h4>
      {/* <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis></XAxis>
          <YAxis dataKey="revenue" interval={'preserveStartEnd'} />
          <Legend />
          <Tooltip />
          <Line dataKey="revenue" stroke="blue" />
          <Line dataKey="actual" stroke="red" />
        </LineChart>
      </ResponsiveContainer> */}

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="actual" stroke="white" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
