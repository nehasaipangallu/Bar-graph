import React, { PureComponent } from 'react';
import './ActiveUserChart.css';
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
    users: 2000,
  },
  {
    month: 'Feb',
    users: 3000,
  },
  {
    month: 'Mar',
    users: 2000,
  },
  {
    month: 'Apr',
    users: 2780,
  },
  {
    month: 'May',
    users: 1890,
  },
  {
    month: 'Jun',
    users: 2390,
  },
  {
    month: 'Jul',
    users: 2400,
  },
];

export default function ActiveUserChart() {
  return (
    <div class="col-lg-2 col-md-4 col-sm-8 user-active">
      <div class="active-user-chart-border">
        <div className="text-image">
          <div class="dot">
            <img
              src="https://github.com/nehasaipangallu/Bar-graph/blob/main/assets/active-user.svg?raw=true"
              className="use-pic"
            />
          </div>
          <h6>34,000</h6>
          <h6>Total Active Users</h6>
        </div>
        <div>
          <AreaChart
            width={307.8}
            height={108}
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            className="area-chart"
          >
            <Tooltip />
            <defs>
              <linearGradient id="colorusers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#52BEF3" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#52BEF3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="users"
              stroke="#52BEF3"
              fillOpacity={1}
              fill="url(#colorusers)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}
