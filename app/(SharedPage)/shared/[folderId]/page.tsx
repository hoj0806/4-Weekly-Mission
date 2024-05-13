import Profile from "@/components/sharedPage/Profile/Profile";
import SharedPageMain from "@/components/sharedPage/SharedPageMain/SharedPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";

export const metadata = {
  title: "Shared",
};

const SharedPage = async ({ params }: { folderId: string }) => {
  return (
    <HeaderFooterLayout>
      <Profile />
      <SharedPageMain params={params} />
    </HeaderFooterLayout>
  );
};

export default SharedPage;
