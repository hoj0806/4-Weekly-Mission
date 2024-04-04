import HomePageMain from "@/components/homePage/HomePageMain/HomePageMain";
import HomePageInfo from "@/components/homePage/HomePageInfo/HomePageInfo";
import HeaderFooterLayout from "../headerFooterLayout";

const Home = () => {
  return (
    <HeaderFooterLayout>
      <HomePageMain />
      <HomePageInfo />
    </HeaderFooterLayout>
  );
};

export default Home;
