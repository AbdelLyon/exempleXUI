"use client";
import { ThemeProviderProps, ThemeProvider as Theme } from "@xefi/xui/providers";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <Theme {...props}>{children}</Theme>;
};

export default ThemeProvider;
