import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";

// Dummy Data
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
// Context
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="px-5 py-12 ">
      <div className="flex flex-wrap justify-center lg:flex-nowrap md:flex-col drop-shadow-md">
        <div className="w-full p-8 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl pt-9 bg-hero-pattern">
          <div className="flex items-center justify-between ">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">₹2,00,200</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap items-center gap-5 mt-10 drop-shadow-sm">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="p-4 text-2xl rounded-full opacity-90 hover:drop-shadow-xl "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ----- */}
      <div className="flex flex-wrap gap-10 ">
        <div className="p-4 mt-10 bg-white drop-shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="pr-10 m-4 border-r-1 border-color">
              <div>
                <p>
                  <span className="text-3xl font-semibold">₹ 555468</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-teal-500 ml-3 text-xs">
                    26%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">₹ 5468</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              {/* Sparkline Chart */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            {/* Bar Chart */}
            <Stacked width="320px" height="360px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
