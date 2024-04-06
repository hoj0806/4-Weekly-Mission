import { Metadata } from "next";
import "../styles/global.css";

import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
