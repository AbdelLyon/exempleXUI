"use client";
import { ReactNode } from "react";
import { ReactQueryProvider } from "@xefi/xui/providers";

const QueryProvider = ({ children }: { children: ReactNode; }) => {
  return <ReactQueryProvider> {children}</ReactQueryProvider>;
};

export default QueryProvider;
