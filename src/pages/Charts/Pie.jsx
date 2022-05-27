import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartHeader, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="p-10 m-4 mt-24 bg-white md:m-10 md:mt-24 dark:bg-secondary-dark-bg rounded-3xl">
    <ChartHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;