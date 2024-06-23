"use client";
import React, { useCallback, useState } from "react";
import { RowSelectedEvent } from "ag-grid-community";
import { XDataGrid } from "@xefi/xui/dataGrid";

import { Movie } from "../../models/Movie";

import useGetData from "@/hooks/useGetData";
import useColDefs from "@/hooks/useColDefs";

const DataGridComponent: React.FC = () => {
  const { data: rowsData, fetchNextPage, isFetchingNextPage } = useGetData();
  const { colDefs } = useColDefs();
  const [rowSelected, setRowSelected] = useState<Partial<Movie>>();

  const onRowSelected = useCallback(
    (event: RowSelectedEvent<Partial<Movie>>) => {
      if (event.data) {
        setRowSelected(event.data);
      }
    },
    [],
  );

  return (
    <div className="ag-theme-alpine-dark">
      <XDataGrid
        className={"mt-20"}
        cols={colDefs}
        height={600}
        isFetchingNextPage={isFetchingNextPage}
        rowClass="hover:bg-[#fafafb]"
        rowSelection="multiple"
        rows={rowsData}
        width="70vw"
        onBodyScrollEnd={() => fetchNextPage()}
        onRowSelected={onRowSelected}
      />
    </div>
  );
};

export default DataGridComponent;
