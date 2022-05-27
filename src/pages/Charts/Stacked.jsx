import React from "react";

import { ChartHeader, Stacked as StackedChart } from "../../components";

const Stacked = () => (
  <div className="p-10 m-4 mt-24 bg-white md:m-10 md:mt-24 dark:bg-secondary-dark-bg rounded-3xl">
    <ChartHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
