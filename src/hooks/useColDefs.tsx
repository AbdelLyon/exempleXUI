import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Movie } from "../../models/Movie";

import ModalComponent from "@/components/ModalComponent";

const cellStyles = { border: "none" };

const ActionIcons = ({ data }: { data: Movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalComponent
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        trigger={() => (
          <FontAwesomeIcon
            className="mr-2 cursor-pointer"
            icon={faTrashCan}
            style={{ color: "red" }}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      />
      <FontAwesomeIcon
        className="cursor-pointer px-2"
        icon={faPenToSquare}
        style={{ color: "#0080ff" }}
      />
    </>
  );
};

const useColDefs = () => {
  const colDefs: ColDef<Partial<Movie & { actions?: string }>>[] = [
    {
      field: "genre_ids",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Tesla", "Ford", "Toyota"],
      },
      cellStyle: cellStyles,
      flex: 2,
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "title",
      flex: 2,
      cellStyle: cellStyles,
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "popularity",
      flex: 1,
      editable: true,
      cellStyle: cellStyles,
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "vote_average",
      flex: 1,
      cellStyle: cellStyles,
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "actions",
      sortable: false,
      cellRenderer: ({ data }: { data: Movie }) => <ActionIcons data={data} />,
      flex: 1,
      cellStyle: cellStyles,
      tooltipValueGetter: (p) => p.value,
    },
  ];

  return { colDefs };
};

export default useColDefs;
