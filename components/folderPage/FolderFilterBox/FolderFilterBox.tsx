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
  params: any;
}

const FolderFilterBox = ({
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
    setActiveFilterId(folderId.toString());
    setFolderModalValue(folderName);
    setShareUrlFolderId(folderId.toString());
  };

  const handleClickShowAllLinksButton = () => {
    setIsShowFuncButtonBox(false);

    setActiveFilterId("showAll");
  };
  return (
    <div className={styles.link_filter_box}>
      <Link href='/folder'>
        <ShowAllLinksButton
          isActive={params?.folderId === undefined}
          activeFilterId={activeFilterId}
          handleClick={() => handleClickShowAllLinksButton()}
        />
      </Link>

      {data.map(({ name, id }, index) => {
        return (
          <Link href={`/folder/${id}`} key={id}>
            <FolderFilterButton
              name={name}
              key={id}
              isActive={params?.folderId === String(id)}
              handleClick={() => handleClickFilterButton(name, id)}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default FolderFilterBox;
