// "use client";

import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "F2F",
  description: "Calling Face to Face",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </div>
  );
};

export default RootLayout;
