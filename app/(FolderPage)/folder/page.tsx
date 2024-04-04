"use client";

import useModal from "@/hooks/useModal";
import { useState } from "react";
import AddLink from "@/components/folderPage/AddLink/AddLink";
import FolderPageMain from "@/components/folderPage/FolderPageMain/FolderPageMain";
import HeaderFooterLayout from "@/app/headerFooterLayout";
const FolderPage = () => {
  const {
    isShowModal: isShowAddLinkInFolderModal,
    handleModalClick: handleAddLinkInFolderModalClick,
  } = useModal(false);

  const [sharedUrl, setSharedUrl] = useState("");
  return (
    <HeaderFooterLayout>
      <AddLink
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        setSharedUrl={setSharedUrl}
      />
      <FolderPageMain
        isShowAddLinkInFolderModal={isShowAddLinkInFolderModal}
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        sharedUrl={sharedUrl}
        setSharedUrl={setSharedUrl}
      />
    </HeaderFooterLayout>
  );
};

export default FolderPage;
