import React from 'react';
import './Cpuutilization.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import React, { PureComponent } from 'react';

const data = [
  { 'Date': new Date(2020, 2, 3),   'Open': 3235, 'High': 3268, 'Low': 3235, 'Close': 3248, 'Volume': 3757910000 },
  { 'Date': new Date(2020, 2, 4),   'Open': 3280, 'High': 3306, 'Low': 3280, 'Close': 3297, 'Volume': 3995320000 },
  { 'Date': new Date(2020, 2, 5),   'Open': 3324, 'High': 3337, 'Low': 3313, 'Close': 3334, 'Volume': 4117730000 },
  { 'Date': new Date(2020, 2, 6),   'Open': 3344, 'High': 3347, 'Low': 3334, 'Close': 3345, 'Volume': 3868370000 },
  { 'Date': new Date(2020, 2, 7),   'Open': 3335, 'High': 3341, 'Low': 3322, 'Close': 3327, 'Volume': 3730650000 },
  { 'Date': new Date(2020, 2, 10),  'Open': 3318, 'High': 3352, 'Low': 3317, 'Close': 3352, 'Volume': 3450350000 },
  { 'Date': new Date(2020, 2, 11),  'Open': 3365, 'High': 3375, 'Low': 3352, 'Close': 3357, 'Volume': 3760550000 },
  { 'Date': new Date(2020, 2, 12),  'Open': 3370, 'High': 3381, 'Low': 3369, 'Close': 3379, 'Volume': 3926380000 },
  { 'Date': new Date(2020, 2, 13),  'Open': 3365, 'High': 3385, 'Low': 3360, 'Close': 3373, 'Volume': 3498240000 },
  { 'Date': new Date(2020, 2, 14),  'Open': 3378, 'High': 3380, 'Low': 3366, 'Close': 3380, 'Volume': 3398040000 },
  { 'Date': new Date(2020, 2, 18),  'Open': 3369, 'High': 3375, 'Low': 3355, 'Close': 3370, 'Volume': 3746720000 },
  { 'Date': new Date(2020, 2, 19),  'Open': 3380, 'High': 3393, 'Low': 3378, 'Close': 3386, 'Volume': 3600150000 },
  { 'Date': new Date(2020, 2, 20),  'Open': 3380, 'High': 3389, 'Low': 3341, 'Close': 3373, 'Volume': 4007320000 },
  { 'Date': new Date(2020, 2, 21),  'Open': 3360, 'High': 3360, 'Low': 3328, 'Close': 3337, 'Volume': 3899270000 },
  { 'Date': new Date(2020, 2, 24),  'Open': 3257, 'High': 3259, 'Low': 3214, 'Close': 3225, 'Volume': 4842960000 },
  { 'Date': new Date(2020, 2, 25),  'Open': 3238, 'High': 3246, 'Low': 3118, 'Close': 3128, 'Volume': 5591510000 },
  { 'Date': new Date(2020, 2, 26),  'Open': 3139, 'High': 3182, 'Low': 3108, 'Close': 3116, 'Volume': 5478110000 },
  { 'Date': new Date(2020, 2, 27),  'Open': 3062, 'High': 3097, 'Low': 2977, 'Close': 2978, 'Volume': 7058840000 },
  { 'Date': new Date(2020, 2, 28),  'Open': 2916, 'High': 2959, 'Low': 2855, 'Close': 2954, 'Volume': 8563850000 },
  { 'Date': new Date(2020, 3, 2),   'Open': 2974, 'High': 3090, 'Low': 2945, 'Close': 3090, 'Volume': 6376400000 },
  { 'Date': new Date(2020, 3, 3),   'Open': 3096, 'High': 3136, 'Low': 2976, 'Close': 3003, 'Volume': 6355940000 },
  { 'Date': new Date(2020, 3, 4),   'Open': 3045, 'High': 3130, 'Low': 3034, 'Close': 3130, 'Volume': 5035480000 },
  { 'Date': new Date(2020, 3, 5),   'Open': 3075, 'High': 3083, 'Low': 2999, 'Close': 3023, 'Volume': 5575550000 },
  { 'Date': new Date(2020, 3, 6),   'Open': 2954, 'High': 2985, 'Low': 2901, 'Close': 2972, 'Volume': 6552140000 },
  { 'Date': new Date(2020, 3, 9),   'Open': 2863, 'High': 2863, 'Low': 2734, 'Close': 2746, 'Volume': 8423050000 },
  { 'Date': new Date(2020, 3, 10),  'Open': 2813, 'High': 2882, 'Low': 2734, 'Close': 2882, 'Volume': 7635960000 },
  { 'Date': new Date(2020, 3, 11),  'Open': 2825, 'High': 2825, 'Low': 2707, 'Close': 2741, 'Volume': 7374110000 },
  { 'Date': new Date(2020, 3, 12),  'Open': 2630, 'High': 2660, 'Low': 2478, 'Close': 2480, 'Volume': 8829380000 },
  { 'Date': new Date(2020, 5, 5),   'Open': 2868, 'High': 2898, 'Low': 2863, 'Close': 2868, 'Volume': 5129590000 },
  { 'Date': new Date(2020, 5, 6),   'Open': 2883, 'High': 2891, 'Low': 2847, 'Close': 2848, 'Volume': 4861920000 }
];

export default function Cpuutilization(){
  return(
    <div className="container" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    isToolbarVisible={false}
                    chartType="Candle"
                    chartTitle="S&P 500"
                    titleAlignment="Left"
                    titleLeftMargin="25"
                    titleTopMargin="10"
                    titleBottomMargin="10"
                    subtitle="CME - CME Delayed Price, Currency in USD"
                    subtitleAlignment="Left"
                    subtitleLeftMargin="25"
                    subtitleTopMargin="5"
                    subtitleBottomMargin="10"
                    yAxisLabelLocation="OutsideLeft"
                    yAxisMode="Numeric"
                    yAxisTitle="Financial Prices"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    zoomSliderType="None"
                    dataSource={data}/>
            </div>
        
  );
}