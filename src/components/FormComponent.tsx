'use client';
import { ChangeEvent, useCallback, useState } from "react";
import useGetData from "@/hooks/useGetData";
import { ExtendedProps, Movie } from "../../models/Movie";
import { XComboSelect, XSelect, XInput, XTextarea, XCheckbox, XRadioList, RadioGroupOption } from '@xefi/xui/form';

const plans = [
   { name: 'Startup', available: true },
   { name: 'Business', available: true },
   { name: 'Enterprise', available: false },
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
         className="border border-border min-h-[400px] rounded-md mt-10 p-4"
      >

         <div className="grid grid-cols-3 gap-4">

            <XInput
               name="name"
               value={inputValue}
               onChange={handleInputChange}
               placeholder="Name"
               type="search"
               iconClassName="h-4 w-4"
            />

            <XComboSelect
               options={data}
               selectionKeys={["title"]}
               fetchNextPage={fetchNextPage}
               onSelect={handleSelect}
               selected={selected as ExtendedProps}
               label="Movies"
               isFetchingNextPage={isFetchingNextPage}
               placeholder="Rechercher..."
            />


            <XSelect
               options={data}
               selectionKeys={["title"]}
               fetchNextPage={fetchNextPage}
               onSelect={handleSelect}
               selected={selected}
               label="Movies"
               isFetchingNextPage={isFetchingNextPage}
               placeholder="Sélectionner une option..."
            />
            <XTextarea
               value={textareaValue}
               onChange={handleTextareaChange}
               rows={6}
               className="w-max mb-2"
            />
         </div>
         <div className="flex justify-between">
            <XCheckbox label="accepter les conditions" />
            <XRadioList
               options={plans}
               selected={radioSelected as RadioGroupOption}
               setSelected={handleRadioSelected}
            />
         </div>


      </form>



   );
};

export default FormComponent;
