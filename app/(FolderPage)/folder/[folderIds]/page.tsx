"use client";

import useModal from "@/hooks/useModal";
import { useState } from "react";
import AddLink from "@/components/folderPage/AddLink/AddLink";
import FolderPageMain from "@/components/folderPage/FolderPageMain/FolderPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { useParams } from "next/navigation";
const FolderPage = () => {
  const params = useParams();
  const queryClient = new QueryClient();

  const {
    isShowModal: isShowAddLinkInFolderModal,
    handleModalClick: handleAddLinkInFolderModalClick,
  } = useModal(false);

  const [sharedUrl, setSharedUrl] = useState("");

  return (
    <>
      <title>Folder | Linkbrary</title>

      <HeaderFooterLayout>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AddLink
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
            setSharedUrl={setSharedUrl}
          />
          <FolderPageMain
            isShowAddLinkInFolderModal={isShowAddLinkInFolderModal}
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
            sharedUrl={sharedUrl}
            setSharedUrl={setSharedUrl}
            params={params}
          />
        </HydrationBoundary>
      </HeaderFooterLayout>
    </>
  );
};

export default FolderPage;
