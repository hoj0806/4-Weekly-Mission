import "../styles/global.css";
import Navigation from "@/components/common/Navigation/Navigation";
import Footer from "@/components/common/Footer/Footer";
import { ReactNode } from "react";

const HeaderFooterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;
