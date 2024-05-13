import { Metadata } from "next";
import "../styles/global.css";

import { ReactNode } from "react";
import Provider from "@/util/Provider";
export const metadata: Metadata = {
  title: {
    template: "%s | Linkbrary",
    default: "Linkbrary",
  },
  description: "Share Your Link!",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ko'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
