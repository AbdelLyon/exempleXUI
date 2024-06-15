'use client';
import { ChangeEvent, useCallback, useState } from "react";
import useGetData from "@/hooks/useGetData";
import { ExtendedProps, Movie } from "../../models/Movie";
import { RadioGroupOption, XuiCheckbox, XuiInput, XuiRadio, XuiSelect, XuiSelectSearch, XuiTextarea } from '@xefi/xui/form';

const plans = [
   { label: 'Startup', available: true },
   { label: 'Business', available: true },
   { label: 'Enterprise', available: false },
];
const FormComponent = () => {
   const [selected, setSelected] = useState<Partial<Movie>>({
      id: 0,
      title: "",
   });

   const { data, fetchNextPage, isFetchingNextPage } = useGetData();

   const handleSelect = useCallback(
      (selected: Partial<Movie>) => {
         setSelected(selected);
      },
      []
   );

   const [inputValue, setInputValue] = useState("");
   const [textareaValue, setTextareaValue] = useState("");
   const [radioSelected, setRadioSelected] = useState<RadioGroupOption>();

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      console.log(inputValue);
   };
   const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTextareaValue(event.target.value);
      console.log(textareaValue);
   };

   const handleRadioSelected = (option: RadioGroupOption) => {
      setRadioSelected(option);
      console.log(option);
   };


   return (
      <form
         className="border border-border w-2/4 min-h-[400px] rounded-md mt-10 p-4"
      >

         <div className="grid grid-cols-1 gap-4">

            <XuiInput
               name="name"
               value={inputValue}
               onChange={handleInputChange}
               placeholder="Name"
               type="email"
               iconClassName="h-5 w-5"
            />

            <XuiSelectSearch
               options={data}
               selectionKeys={["title"]}
               fetchNextPage={fetchNextPage}
               onSelect={handleSelect as any}
               selected={selected as any}
               label="Movies"
               isFetchingNextPage={isFetchingNextPage}
               placeholder="Rechercher..."
               
            />


            <XuiSelect
               options={data}
               selectionKeys={["title"]}
               fetchNextPage={fetchNextPage}
               onSelect={handleSelect as any}
               selected={selected as any}
               label="Movies"
               isFetchingNextPage={isFetchingNextPage}
               placeholder="Sélectionner une option..."
            />
            <XuiTextarea
               value={textareaValue}
               onChange={handleTextareaChange}
               rows={6}
            />
         </div>
         <div className="flex mt-4 justify-between">
            <XuiCheckbox label="accepter les conditions" />
            <XuiRadio
               options={plans}
               selected={radioSelected as RadioGroupOption}
               setSelected={handleRadioSelected}
            />
         </div>


      </form>



   );
};

export default FormComponent;
