"use client";

import useModal from "@/hooks/useModal";
import { useState } from "react";
import AddLink from "@/components/folderPage/AddLink/AddLink";
import FolderPageMain from "@/components/folderPage/FolderPageMain/FolderPageMain";

const FolderPage = () => {
  const {
    isShowModal: isShowAddLinkInFolderModal,
    handleModalClick: handleAddLinkInFolderModalClick,
  } = useModal(false);

  const [sharedUrl, setSharedUrl] = useState("");
  return (
    <>
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
    </>
  );
};

export default FolderPage;
