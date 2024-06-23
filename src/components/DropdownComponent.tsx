"use client";
import {
  faPencil,
  faSuitcase,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { XuiDropdown, DropdownItem } from "@xefi/xui/dropdown";
import { IoPersonSharp } from "@xefi/xui/icons";

const DropdownComponent = (): JSX.Element => {
  const DropdownItems: DropdownItem[] = [
    { label: "Edit", icon: faPencil, action: () => {} },
    {
      label: "Duplicate",
      icon: faSuitcase,
      action: () => {},
    },
    {
      label: "Delete",
      icon: faTrash,
      action: () => {},
    },
  ];

  return (
    <XuiDropdown
      items={DropdownItems}
      trigger={() => {
        return <IoPersonSharp className="text-primary" size={20} />;
      }}
    />
  );
};

export default DropdownComponent;
