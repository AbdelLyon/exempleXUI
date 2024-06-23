"use client";
import { XuiQueryProvider, XuiThemeProvider } from "@xefi/xui/providers";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <XuiThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="light"
    >
      <XuiQueryProvider> {children} </XuiQueryProvider>
    </XuiThemeProvider>
  );
};

export default Providers;
