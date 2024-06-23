"use client";
import { ChartOptions, XuiChart, InteractionItem } from "@xefi/xui/chart";
import { useState } from "react";

import { dataBar, optionsBarGrouped } from "@/data/dataChart";

export const BarComponent = () => {
  const [dataChart, setDataChart] = useState<{
    label: any;
    dataset: any;
  }>();

  const handleClick = (elementSelected: InteractionItem[]) => {
    setDataChart({
      label: dataBar.labels?.[elementSelected[0].index],
      dataset:
        dataBar.datasets?.[elementSelected[0]?.datasetIndex]?.data[
          elementSelected[0]?.index
        ],
    });
  };

  return (
    <div className="flex size-full flex-col items-center ">
      <div className="flex h-[300px] w-2/4 justify-center">
        <XuiChart
          data={dataBar}
          getElementSelected={handleClick}
          options={optionsBarGrouped as ChartOptions<"bar">}
          type="bar"
        />
      </div>
    </div>
  );
};

// export const DoughnutComponent = () => {
//   return (
//     <div className="flex h-[300px] w-2/4 justify-center">
//       <XuiChart
//         data={dataDoughnut}
//         getElementSelected={handleClick}
//         type="doughnut"
//       />
//     </div>
//   );
// };

// export const ScatterComponent = () => {
//   return (
//     <div className="flex h-[300px] w-2/4 justify-center">
//       <XuiChart
//         data={dataScatter}
//         getElementSelected={handleClick}
//         type="scatter"
//       />
//     </div>
//   );
// };

// export const AreaComponent = () => {
//   return (
//     <div className="flex h-[300px] w-2/4 justify-center">
//       <XuiChart
//         data={dataArea}
//         getElementSelected={handleClick}
//         type="polarArea"
//       />
//     </div>
//   );
// };
