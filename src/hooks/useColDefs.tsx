import { ColDef } from "@xefi/xui/dataGrid";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Movie } from "../../models/Movie";

import ModalComponent from "@/components/ModalComponent";

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
  function formatterOrParser<T extends string | any[]>(params: {
    value: T;
    newValue?: T;
  }): string {
    if (Array.isArray(params.value)) {
      return params.value.join(", ");
    }

    return params.value.toString();
  }

  const colDefs: ColDef<Movie & { actions?: string }>[] = [
    {
      field: "genre_ids",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Tesla", "Ford", "Toyota"], // Exemple de valeurs pour le sélecteur
      },
      cellStyle: { border: "none" },
      flex: 2,
      tooltipValueGetter: (p) => p.value,
      valueParser: (params) => formatterOrParser({ value: params.newValue }),
      valueFormatter: (params) => formatterOrParser({ value: params.value }),
    },
    {
      field: "title",
      flex: 2,
      cellStyle: { border: "none" },
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "popularity",
      flex: 1,
      editable: true,
      cellStyle: { border: "none" },
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "vote_average",
      flex: 1,
      cellStyle: { border: "none" },
      tooltipValueGetter: (p) => p.value,
    },
    {
      field: "actions",
      sortable: false,
      cellRenderer: ({ data }: { data: Movie }) => <ActionIcons data={data} />,
      flex: 1,
      cellStyle: { border: "none" },
      tooltipValueGetter: (p) => p.value,
    },
  ];

  return { colDefs };
};

export default useColDefs;
