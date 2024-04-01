"use client";
import styles from "./FolderPageMain.module.css";
import LinkList from "../LinkList/LinkList";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import LinkSearchInput from "@/components/common/LinkSearchInput/LinkSearchInput";
import useModal from "@/hooks/useModal";
import { LinkDataType } from "@/types/LinkDataTypes";
import FolderFilterBox from "../FolderFilterBox/FolderFilterBox";
import { FolderDataType } from "@/types/FolderDataTypes";
import AddFolderButton from "../AddFolderButton/AddFolderButtons";
import RenameFolderNameModal from "../modal/RenameFolderNameModal/RenameFolderNameModal";
import DeleteFolderModal from "../modal/DeleteFolderModal/DeleteFolderModal";
import AddFolderModal from "../modal/AddFolderModal/AddFolderModal";
import AddLinkInFolder from "../modal/AddLinkInFolder/AddLinkInFolder";
import ShareFolderModal from "../modal/ShareFolderModal/ShareFolderModal";
import LinkFuncButtonBox from "../LinkFuncButtonBox/LinkFuncButtonBox";
import ShowSearchData from "../ShowSearchData/ShowSearchData";

interface FolderPageMainProps {
  isShowAddLinkInFolderModal: boolean;
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  sharedUrl: string;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

const FolderPageMain = ({
  isShowAddLinkInFolderModal,
  handleAddLinkInFolderModalClick,
  sharedUrl,
  setSharedUrl,
}: FolderPageMainProps) => {
  const [linkData, setLinkData] = useState<LinkDataType | null>(null);
  const [folderId, setFolderId] = useState("");

  const [folderData, setFolderData] = useState<FolderDataType | null>(null);
  const getLinkData = async () => {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/users/3/links${folderId}`
    );
    const json: LinkDataType = await response.json();
    setLinkData(json);
  };

  const getFolderData = async () => {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/users/3/folders"
    );
    const json: FolderDataType = await response.json();
    setFolderData(json);
  };

  useEffect(() => {
    getLinkData();
  }, [folderId]);

  useEffect(() => {
    getFolderData();
  }, []);

  console.log(linkData);
  console.log(folderData);
  const [folderName, setFolderName] = useState("");
  const [isShowFuncButtonBox, setIsShowFuncButtonBox] = useState(false);

  const {
    isShowModal: isShowShareFolderModal,
    handleModalClick: handleShareFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowRenameFolderModal,
    handleModalClick: handleRenameFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowDeleteFolderModal,
    handleModalClick: handleDeleteFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowAddFolderModal,
    handleModalClick: handleAddFolderModalClick,
  } = useModal(false);

  const [FolderModalValue, setFolderModalValue] = useState("");
  const [ShareUrlFolderId, setShareUrlFolderId] = useState("");
  const [viewSearchData, setViewSearchData] = useState<boolean | null>(false);
  const [searchData, setSearchData] = useState<string | null>("");
  const [viewData, setViewData] = useState<string | null>("");

  return (
    <div className={styles.main_wrapper}>
      <LinkSearchInput
        setViewSearchData={setViewSearchData}
        searchData={searchData}
        setSearchData={setSearchData}
        setLinkData={setLinkData}
        linkData={linkData}
        folderId={folderId}
        setViewData={setViewData}
      />

      {viewSearchData && <ShowSearchData viewData={viewData} />}

      <div className={styles.folder_page_content_wrapper}>
        <div className={styles.folder_filter_wrapper}>
          <FolderFilterBox
            setFolderName={setFolderName}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
            setFolderId={setFolderId}
            setFolderModalValue={setFolderModalValue}
            setShareUrlFolderId={setShareUrlFolderId}
            folderData={folderData}
          />
          <AddFolderButton
            handleAddFolderModalClick={handleAddFolderModalClick}
          />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>{folderName}</h1>
          {isShowFuncButtonBox && (
            <LinkFuncButtonBox
              handleRenameFolderModalClick={handleRenameFolderModalClick}
              handleDeleteFolderModalClick={handleDeleteFolderModalClick}
              handleShareFolderModalClick={handleShareFolderModalClick}
            />
          )}
        </div>
        <LinkList
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          setSharedUrl={setSharedUrl}
          linkData={linkData}
        />
      </div>

      {isShowShareFolderModal && (
        <ShareFolderModal
          handleShareFolderModalClick={handleShareFolderModalClick}
          FolderModalValue={FolderModalValue}
          ShareUrlFolderId={ShareUrlFolderId}
        />
      )}
      {isShowRenameFolderModal && (
        <RenameFolderNameModal
          handleRenameFolderModalClick={handleRenameFolderModalClick}
          FolderModalValue={FolderModalValue}
        />
      )}
      {isShowDeleteFolderModal && (
        <DeleteFolderModal
          FolderModalValue={FolderModalValue}
          handleDeleteFolderModalClick={handleDeleteFolderModalClick}
        />
      )}
      {isShowAddFolderModal && (
        <AddFolderModal handleAddFolderModalClick={handleAddFolderModalClick} />
      )}
      {isShowAddLinkInFolderModal && (
        <AddLinkInFolder
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          folderData={folderData}
          sharedUrl={sharedUrl}
        />
      )}
    </div>
  );
};

export default FolderPageMain;
