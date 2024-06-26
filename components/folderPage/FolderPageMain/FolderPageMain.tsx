"use client";
import styles from "./FolderPageMain.module.css";
import LinkListByFolderId from "../LinkListByFolderId/LinkListByFolderId";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { getAllLinks } from "@/api/folder";
import { getUserInfo } from "@/api/user";
import LinkList from "../LinkList/LinkList";
interface FolderPageMainProps {
  isShowAddLinkInFolderModal: boolean;
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  sharedUrl: string;
  setSharedUrl: Dispatch<SetStateAction<string>>;
  params: any;
}

const FolderPageMain = ({
  isShowAddLinkInFolderModal,
  handleAddLinkInFolderModalClick,
  sharedUrl,
  setSharedUrl,
  params,
}: FolderPageMainProps) => {
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });
  const [folderId, setFolderId] = useState("");

  useEffect(() => {
    params !== undefined ? setFolderId(params.folderId) : setFolderId("전체");
  }, []);

  console.log(folderId);
  const [linkData, setLinkData] = useState<LinkDataType | null>(null);

  const [folderData, setFolderData] = useState<FolderDataType | null>(null);

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
            setFolderModalValue={setFolderModalValue}
            setShareUrlFolderId={setShareUrlFolderId}
            folderData={folderData}
            params={params}
          />
          <AddFolderButton
            handleAddFolderModalClick={handleAddFolderModalClick}
          />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>{folderName}</h1>
          {params && (
            <LinkFuncButtonBox
              handleRenameFolderModalClick={handleRenameFolderModalClick}
              handleDeleteFolderModalClick={handleDeleteFolderModalClick}
              handleShareFolderModalClick={handleShareFolderModalClick}
            />
          )}
        </div>
        {folderId === "전체" ? (
          <LinkList
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
            setSharedUrl={setSharedUrl}
            linkData={linkData}
          />
        ) : (
          <LinkListByFolderId
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
            setSharedUrl={setSharedUrl}
            linkData={linkData}
            params={params}
          />
        )}
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
          folderId={folderId}
        />
      )}
      {isShowDeleteFolderModal && (
        <DeleteFolderModal
          FolderModalValue={FolderModalValue}
          handleDeleteFolderModalClick={handleDeleteFolderModalClick}
          folderId={folderId}
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
