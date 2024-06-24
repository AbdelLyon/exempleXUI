"use client";
import React, { useCallback } from "react";
import { RowSelectedEvent, XuiDataGrid } from "@xefi/xui/dataGrid";

import { Movie } from "../../models/Movie";

import useGetData from "@/hooks/useGetData";
import useColDefs from "@/hooks/useColDefs";

const DataGridComponent: React.FC = () => {
  const { data: rowsData, fetchNextPage, isFetchingNextPage } = useGetData();
  const { colDefs } = useColDefs();

  const onRowSelected = useCallback((event: RowSelectedEvent<Movie>) => {
    console.log(event.data);
  }, []);

  return (
    <div className="ag-theme-quartz dark:ag-theme-quartz-dark">
      <XuiDataGrid
        columnDefs={colDefs}
        height={600}
        isFetchingNextPage={isFetchingNextPage}
        rowClass="hover:bg-[#fafafb]"
        rowData={rowsData}
        rowSelection="multiple"
        width="70vw"
        onBodyScrollEnd={() => fetchNextPage()}
        onRowSelected={onRowSelected}
      />
    </div>
  );
};

export default DataGridComponent;
