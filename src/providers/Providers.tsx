"use client";
import { XUIProvider, XProviderProps } from "@xefi/xui/providers";
import { useRouter } from "next/navigation";
import QueryProvider from "./QueryProvidre";


const Providers = ({ themeProps, children }: XProviderProps) => {
  const router = useRouter();


  return (
  <XUIProvider navigate={router.push} themeProps={themeProps}>
    <QueryProvider> {children} </QueryProvider>
  </XUIProvider>);
};

export default Providers;
