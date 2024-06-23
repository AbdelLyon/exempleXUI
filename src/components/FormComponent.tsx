"use client";
import { ChangeEvent, useCallback, useState } from "react";
import {
  RadioGroupOption,
  XuiCheckbox,
  XuiInput,
  XuiRadio,
  XuiSelect,
  XuiSelectSearch,
  XuiTextarea,
} from "@xefi/xui/form";
import { XuiButton } from "@xefi/xui/button";

import { Movie } from "../../models/Movie";

import useGetData from "@/hooks/useGetData";

const plans = [
  { label: "Startup", available: true },
  { label: "Business", available: true },
  { label: "Enterprise", available: false },
];
const FormComponent = () => {
  const [selected, setSelected] = useState<Partial<Movie>>({
    id: 0,
    title: "",
  });

  const { data, fetchNextPage, isFetchingNextPage } = useGetData();

  const handleSelect = useCallback((selected: Partial<Movie>) => {
    setSelected(selected);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [radioSelected, setRadioSelected] = useState<RadioGroupOption>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleRadioSelected = (option: RadioGroupOption) => {
    setRadioSelected(option);
  };

  return (
    <form className="border-border shadow-card dark:bg-background mt-10 min-h-[400px] w-2/4 rounded-md border bg-white p-4 shadow-md dark:shadow-md">
      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-2 gap-3">
          <XuiInput
            iconClassName="h-5 w-5"
            label="Email *"
            name="email"
            placeholder="Email"
            type="email"
            value={inputValue}
            onChange={handleInputChange}
          />
          <XuiInput
            error="error"
            iconClassName="h-5 w-5"
            label="Mot de passe *"
            name="password"
            placeholder="Mot de Passe"
            type="password"
            value={inputValue}
            onChange={handleInputChange}
          />
          <XuiSelectSearch
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            label="Movies"
            name="movies"
            options={data}
            placeholder="Rechercher..."
            selected={selected as any}
            selectionKeys={["title"]}
            onSelect={handleSelect as any}
          />

          <XuiSelect
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            label="Movies"
            name="movies"
            options={data}
            placeholder="Sélectionner une option..."
            selected={selected as any}
            selectionKeys={["title"]}
            onSelect={handleSelect as any}
          />
        </div>
        <XuiTextarea
          rows={6}
          value={textareaValue}
          onChange={handleTextareaChange}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <XuiRadio
          options={plans}
          selected={radioSelected as RadioGroupOption}
          setSelected={handleRadioSelected}
        />
        <XuiCheckbox label="accepter les conditions" />
      </div>
      <div className="flex w-full justify-end">
        <XuiButton className="px-4" variant="outline">
          Valider
        </XuiButton>
      </div>
    </form>
  );
};

export default FormComponent;
