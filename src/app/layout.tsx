import type { Metadata, Viewport } from "next";

import "@xefi/xui/style.css";
import "./globals.css";
import { cn } from "@xefi/xui/utils";

import NavbarCompnent from "@/components/NavbarCompnent";
import Providers from "@/providers/Providers";
import { fontSans } from "@/config/";
export const metadata: Metadata = {
  title: {
    default: "XUI",
    template: "XUI",
  },
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <NavbarCompnent />
          <div className="flex flex-col items-center">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
