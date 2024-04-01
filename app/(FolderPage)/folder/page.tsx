"use client";

import useModal from "@/hooks/useModal";
import { useState } from "react";
import AddLink from "@/components/folderPage/AddLink/AddLink";
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
    </>
  );
};

export default FolderPage;
