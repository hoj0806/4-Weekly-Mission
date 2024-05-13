import styles from "./LinkListByFolderId.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LinkDataType } from "@/types/LinkDataTypes";
import FolderPageLinkItem from "../FolderPageLinkItem/FolderPageLinkItem";
import { useQuery } from "@tanstack/react-query";
import { getAllLinks } from "@/api/folder";
import { getLinksByFolderId } from "@/api/links";
interface LinkListProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
  linkData: LinkDataType | null;
  params: { folderId: string };
}

const LinkListByFolderId = ({
  handleAddLinkInFolderModalClick,
  setSharedUrl,
  linkData,
  params,
}: LinkListProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["links"],
    queryFn: () => getLinksByFolderId(params.folderId),
  });
  const [paramsId, setParamsId] = useState();

  console.log(paramsId);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div>
      {linkData?.data.length === 0 ? (
        <div className={styles.no_link_wrapper}>저장된 링크가 없습니다</div>
      ) : (
        <div className={styles.item_card_grid}>
          {data.map((item) => {
            return (
              <FolderPageLinkItem
                {...item}
                handleAddLinkInFolderModalClick={
                  handleAddLinkInFolderModalClick
                }
                setSharedUrl={setSharedUrl}
                date={item.created_at.slice(0, 10)}
                key={item.id}
                linkId={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LinkListByFolderId;
