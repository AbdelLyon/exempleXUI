'use client'
import { faPencil, faSuitcase, faTrash } from "@fortawesome/free-solid-svg-icons";
import {XuiDropdown, DropdownItem} from '@xefi/xui/dropdown'
import { IoPersonSharp } from '@xefi/xui/icons'


const DropdownComponent = (): JSX.Element => {

   const DropdownItems: DropdownItem[] = [
      { label: 'Edit', icon: faPencil, action: () => console.log('Edit') },
      {
         label: 'Duplicate',
         icon: faSuitcase,
         action: () => console.log('Duplicate')
      },
      {
         label: 'Delete',
         icon: faTrash,
         action: () => console.log('Delete'),
      },
   ];


   return (
      <XuiDropdown items={DropdownItems} trigger={() => {
         return <IoPersonSharp className="text-primary" size={20} />
      }}  />

   );
};

export default DropdownComponent;