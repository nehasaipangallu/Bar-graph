import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';

const data = [
  {x:1, y:45.0,z:46.0 },
  {x:5, y:47.0,z:48.0},
  {x:9, y:44.9, z:45.5},
  {x:13, y:47.5, z:46.5},
  {x:17, y:45.5, z=44.5},
  {x:21, y:48.0, z=46.5},
  {x:26, y:46.5, z=45.0},
  {x:30, y:48.5, z=47.0},
 
]
export default function Revenue(){
  return (
		<div>
		   <LineChart width={500} height={700} data={data}>
       <CartesianGrid/>
       <XAxis dataKey="x" />
       <YAxis yAxisId="left-axis" />
          <YAxis yAxisId="right-axis" orientation="right" />
          <Line yAxisId="left-axis" type="monotone" dataKey="y" 
          stroke="blue"/>
          <Line yAxisId="right-axis" type="monotone" dataKey="z" 
          stroke="red" />
         </LineChart>
      </div>

  );
  }