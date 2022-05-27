import React from "react";

import { ChartHeader, LineChart } from "../../components";

const Line = () => (
  <div className="p-10 m-4 mt-24 bg-white md:m-10 md:mt-24 dark:bg-secondary-dark-bg rounded-3xl">
    <ChartHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;
