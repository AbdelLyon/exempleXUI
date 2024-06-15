"use client";
import {  XuiQueryProvider, XuiThemeProvider } from "@xefi/xui/providers";
import { PropsWithChildren } from "react";


const Providers = ({  children }: PropsWithChildren) => {


  return (
  <XuiThemeProvider 
    attribute='class'
    defaultTheme='light'
    enableSystem
    disableTransitionOnChange
  >
    <XuiQueryProvider > {children} </XuiQueryProvider>
  </XuiThemeProvider>);
};

export default Providers;
