import HomePageMain from "@/components/homePage/HomePageMain/HomePageMain";
import HomePageInfo from "@/components/homePage/HomePageInfo/HomePageInfo";
import HeaderFooterLayout from "../headerFooterLayout";

export const metadata = {
  title: "Home",
};
const Home = () => {
  return (
    <HeaderFooterLayout>
      <HomePageMain />
      <HomePageInfo />
    </HeaderFooterLayout>
  );
};

export default Home;
