import { SetStateAction, useState, Dispatch, useEffect } from "react";
import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "../FolderFilterButton/FolderFilterButton";
import ShowAllLinksButton from "../ShowAllLinkButton/ShowAllLinkButton";
import { FolderDataType } from "@/types/FolderDataTypes";
import { useQuery } from "@tanstack/react-query";
import { getAllFolders } from "@/api/folders";
import Link from "next/link";
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
  params,
}: FolderFilterBoxProps) => {
  const [activeFilterId, setActiveFilterId] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["folders"],
    queryFn: () => getAllFolders(),
  });

  if (isLoading) {
    return <div>로딩중입니다</div>;
  }

  if (error) return <div>{error.message}</div>;

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
      <Link href='/folder'>
        <ShowAllLinksButton
          name='전체'
          activeFilterId={activeFilterId}
          handleClick={() => handleClickShowAllLinksButton()}
        />
      </Link>

      {data.map(({ name, id }) => {
        return (
          <Link href={`/folder/${id}`} key={id}>
            <div>{name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default FolderFilterBox;
