"use client";

import useModal from "@/hooks/useModal";
import { useState } from "react";
import AddLink from "@/components/folderPage/AddLink/AddLink";
import FolderPageMain from "@/components/folderPage/FolderPageMain/FolderPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";
import { getAllLinks } from "@/api/folder";
import { useEffect } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AddLinkInFolder from "@/components/folderPage/modal/AddLinkInFolder/AddLinkInFolder";
const FolderPage = ({ params }: { folderId: string }) => {
  const queryClient = new QueryClient();

  const {
    isShowModal: isShowAddLinkInFolderModal,
    handleModalClick: handleAddLinkInFolderModalClick,
  } = useModal(false);

  const [sharedUrl, setSharedUrl] = useState("");

  console.log(window.location.href.replaceAll("folder", "shared"));
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
