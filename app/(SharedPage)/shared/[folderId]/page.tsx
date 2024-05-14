import Profile from "@/components/sharedPage/Profile/Profile";
import SharedPageMain from "@/components/sharedPage/SharedPageMain/SharedPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { useParams } from "next/navigation";
export const metadata = {
  title: "Shared",
};

const SharedPage = async () => {
  const queryClient = new QueryClient();
  const params = useParams();
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
