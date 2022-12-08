import './SubscriptionAnalytics.css';
import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

export default function SubscriptionAnalytics() {
  return (
    <div class="subscription-analytics col-lg-5 col-md-6 col-sm-12 col-5">
      <h5>Subscription Analytics</h5>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} className="pie-chart">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
