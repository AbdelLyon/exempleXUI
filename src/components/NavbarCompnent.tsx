"use client";
import { XuiTitle } from "@xefi/xui/title";
import { IoReorderThree } from "@xefi/xui/icons";
import { XuiToggleTheme } from "@xefi/xui/theme";
import { type DropdownItem, XuiDropdown } from "@xefi/xui/dropdown";
import { useRouter } from "next/navigation";

import DropdownComponent from "./DropdownComponent";

const NavbarComponent = () => {
  const router = useRouter();
  const DropdownItems: DropdownItem[] = [
    {
      label: "From",
      action: () => router.push("/"),
    },
    {
      label: "Stats",
      action: () => router.push("/statistic"),
    },
    {
      label: "Data Grid",
      action: () => router.push("/data-grid"),
    },
    {
      label: "Card",
      action: () => router.push("/card"),
    },
  ];

  return (
    <div className="flex w-full justify-between px-20 py-4">
      <div className="flex items-center gap-4">
        <XuiTitle className="text-primary text-xl font-bold" tag="h1">
          XUI
        </XuiTitle>
        <XuiDropdown
          items={DropdownItems}
          trigger={() => <IoReorderThree className="size-7" />}
        />
      </div>
      <div className="flex items-center gap-2">
        <XuiToggleTheme className="text-primary" />
        <DropdownComponent />
      </div>
    </div>
  );
};

export default NavbarComponent;
