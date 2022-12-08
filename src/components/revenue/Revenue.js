import React from 'react';
import { LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid} from 'recharts';

const data = [
  {
    date:'01',
    revenue:'45.0k',
    actual:'46.0k'

  },
  {
    date:'05',
    revenue:'47.0k',
    actual:'48.0k'

  },
  {
  date:'09',
  revenue:'44.9k',
  actual:'45.5k'
},
{
date:'13',
revenue:'47.5k',
actual:'46.5k'
},
{
  date:'17',
  revenue:'45.5k',
  actual:'44.5k'

},
{
  date:'21',
  revenue:'48.0k',
  actual:'46.5k'

},
{
  date:'26',
  revenue:'46.5k',
  actual:'45.0k'

},
{
  date:'31',
  revenue:'48.5k',
  actual:'47.0k'

}
]
export default function Revenue(){
  return (
		<div>
		  <h4>Revenue</h4>
      <ResponsiveContainer width="100%" aspect={4}>
      <LineChart data={data} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis></XAxis>
                    <YAxis dataKey="revenue"  interval={'preserveStartEnd'} />
                    <Legend />
                    <Tooltip />
                    <Line dataKey="Current revenue"
                        stroke="blue"  />
                    <Line dataKey="Last revenue"
                        stroke="red"  />
                </LineChart>
            </ResponsiveContainer>
      </div>

  );
  }