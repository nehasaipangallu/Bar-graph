import React, { PureComponent } from 'react';
import './AppDownloads.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    month: 'Jan',
    revenue: 2000,
  },
  {
    month: 'Feb',
    revenue: 3000,
  },
  {
    month: 'Mar',
    revenue: 2000,
  },
  {
    month: 'Apr',
    revenue: 2780,
  },
  {
    month: 'May',
    revenue: 1890,
  },
  {
    month: 'Jun',
    revenue: 2390,
  },
  {
    month: 'Jul',
    revenue: 2400,
  },
];

export default function RevenueChart() {
  return (
    <div className="d-inline-flex p-2">
    <div class="active-user-chart-border">
      <div className="img-txt">
    <span class="dot"></span>
    <h6>45,000</h6>
      <h6>App Downloads</h6>
      </div>
      <div>
      <AreaChart
        width={371.69}
        height={108}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }} className="area-chart-down"
      >
        <Tooltip />
        <defs>
          <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F2ECFD" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F2ECFD" stopOpacity={0} />
          </linearGradient>
        </defs>
        
        {/* <YAxis dataKey="revenue" /> */}
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#F2ECFD"
          fillOpacity={1}
          fill="url(#colorrevenue)"
        />
      </AreaChart>
      </div>
    </div>
    </div>
  );
}
