"use client";
import { XuiToggleTheme } from "@xefi/xui/theme";
import { Title } from "@xefi/xui/utils";
import Link from "next/link";
import Image from "next/image";
import { XuiPopover } from "@xefi/xui/popover";

import DropdownComponent from "./DropdownComponent";

const PopoverContent = () => {
  return (
    <div className="flex gap-4">
      <div className="hover:bg-card rounded-md p-2">
        <Link
          className="text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1"
          href="/"
        >
          Form
        </Link>
        <Image
          alt=""
          className="rounded-sm"
          height={200}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={200}
        />
      </div>
      <div className="hover:bg-card rounded-md p-2">
        <Link
          className="text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1"
          href="/modal"
        >
          Modal
        </Link>
        <Image
          alt=""
          className="rounded-sm"
          height={200}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={200}
        />
      </div>
    </div>
  );
};

const NavbarComponent = () => {
  return (
    <div className="flex w-full justify-between p-4">
      <div className="flex items-center gap-4">
        <Title className="text-primary text-xl font-bold" tag="h1">
          XUI
        </Title>
        <Link
          className="text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1"
          href="/"
        >
          Form
        </Link>
        <Link
          className="text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1"
          href="/modal"
        >
          Modal
        </Link>
        <XuiPopover className="p-4">
          <PopoverContent />
        </XuiPopover>
      </div>
      <div className="flex items-center gap-2">
        <XuiToggleTheme className="text-primary" />
        <DropdownComponent />
      </div>
    </div>
  );
};

export default NavbarComponent;
