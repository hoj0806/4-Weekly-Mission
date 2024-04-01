import { SetStateAction, useState, Dispatch } from "react";
import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "../FolderFilterButton/FolderFilterButton";
import ShowAllLinksButton from "../ShowAllLinkButton/ShowAllLinkButton";
import { FolderDataType } from "@/types/FolderDataTypes";

interface FolderFilterBoxProps {
  folderData: FolderDataType | null;
  setFolderName: Dispatch<SetStateAction<string>>;
  setFolderId: Dispatch<SetStateAction<string>>;
  setIsShowFuncButtonBox: Dispatch<SetStateAction<boolean>>;
  setFolderModalValue: Dispatch<SetStateAction<string>>;
  setShareUrlFolderId: Dispatch<SetStateAction<string>>;
}

const FolderFilterBox = ({
  folderData,
  setFolderName,
  setFolderId,
  setIsShowFuncButtonBox,
  setFolderModalValue,
  setShareUrlFolderId,
}: FolderFilterBoxProps) => {
  const [activeFilterId, setActiveFilterId] = useState("showAll");

  const handleClickFilterButton = (folderName: string, folderId: number) => {
    setIsShowFuncButtonBox(true);
    setFolderName(folderName);
    setFolderId("?folderId=" + String(folderId));
    setActiveFilterId(folderId.toString());
    setFolderModalValue(folderName);
    setShareUrlFolderId(folderId.toString());
  };

  const handleClickShowAllLinksButton = () => {
    setFolderName("전체");
    setIsShowFuncButtonBox(false);
    setFolderId("");
    setActiveFilterId("showAll");
  };
  return (
    <div className={styles.link_filter_box}>
      <ShowAllLinksButton
        name='전체'
        activeFilterId={activeFilterId}
        handleClick={() => handleClickShowAllLinksButton()}
      />

      {folderData?.data.map(({ name, id }) => {
        return (
          <FolderFilterButton
            name={name}
            key={id}
            isActive={activeFilterId === String(id)}
            handleClick={() => handleClickFilterButton(name, id)}
          />
        );
      })}
    </div>
  );
};

export default FolderFilterBox;
