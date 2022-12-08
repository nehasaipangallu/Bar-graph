import React, { PureComponent } from 'react';
import './InactiveUsersChart.css';
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

export default function InactiveUsersChart() {
  return (
    <div  class="col-lg-2 col-md-4 col-sm-8 user-inactive">
      <div class="active-user-chart-border">
        <div className="text-img">
          <span class="dot">
            <img src="https://github.com/nehasaipangallu/Bar-graph/blob/main/assets/inactive-user.svg?raw=true" className="in-img"/>
          </span>
          <h6>34000</h6>
          <h6>Inactive Users</h6>
        </div>
        <AreaChart
          width={307.8}
          height={50.98}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="area-chart-inacive"
        >
          <Tooltip />
          <defs>
            <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5D8F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF5D8F" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* <YAxis dataKey="revenue" /> */}
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#FF5D8F"
            fillOpacity={1}
            fill="url(#colorrevenue)"
          />
        </AreaChart>
      </div>
    </div>
  );
}
