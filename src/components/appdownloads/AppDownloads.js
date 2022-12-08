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
    revenue: 4000,
  },
  {
    month: 'Mar',
    revenue: 3000,
  },
  {
    month: 'Apr',
    revenue: 4780,
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

export default function AppDownloads() {
  return (
    <div  class="col-lg-2 col-md-4 col-sm-8 download-app ">
      <div class="active-user-chart-border">
        <div className="img-txt">
          <div class="dot">
            <img src="https://github.com/nehasaipangallu/Bar-graph/blob/main/assets/shopping-cart.svg?raw=true" className="down-img" />
          </div>
          <span class="heading">
            <h6>45,000</h6>
            <h6>App Downloads</h6>
          </span>
        </div>
        <div>
          <AreaChart
            width={307.8}
            height={80}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            className="area-chart-down"
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
