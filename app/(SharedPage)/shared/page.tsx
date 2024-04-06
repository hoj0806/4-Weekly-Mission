import Profile from "@/components/sharedPage/Profile/Profile";
import SharedPageMain from "@/components/sharedPage/SharedPageMain/SharedPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";

export const metadata = {
  title: "Shared",
};

const SharedPage = async () => {
  return (
    <HeaderFooterLayout>
      <Profile />
      <SharedPageMain />
    </HeaderFooterLayout>
  );
};

export default SharedPage;
