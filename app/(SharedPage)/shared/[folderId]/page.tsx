import Profile from "@/components/sharedPage/Profile/Profile";
import SharedPageMain from "@/components/sharedPage/SharedPageMain/SharedPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";
import { useQuery } from "@tanstack/react-query";
import { getFolderById } from "@/api/folders";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
export const metadata = {
  title: "Shared",
};
export const queryClient = new QueryClient();

const SharedPage = async ({ params }: { folderId: string }) => {
  return (
    <HeaderFooterLayout>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Profile params={params} />
        <SharedPageMain params={params} />
      </HydrationBoundary>
    </HeaderFooterLayout>
  );
};

export default SharedPage;
