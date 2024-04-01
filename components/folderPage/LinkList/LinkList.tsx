import styles from "./LinkList.module.css";
import { Dispatch, SetStateAction } from "react";
import { LinkDataType } from "@/types/LinkDataTypes";
import FolderPageLinkItem from "../FolderPageLinkItem/FolderPageLinkItem";

interface LinkListProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
  linkData: LinkDataType | null;
}

const LinkList = ({
  handleAddLinkInFolderModalClick,
  setSharedUrl,
  linkData,
}: LinkListProps) => {
  return (
    <div>
      {linkData?.data.length === 0 ? (
        <div className={styles.no_link_wrapper}>저장된 링크가 없습니다</div>
      ) : (
        <div className={styles.item_card_grid}>
          {linkData?.data.map((item) => {
            return (
              <FolderPageLinkItem
                {...item}
                handleAddLinkInFolderModalClick={
                  handleAddLinkInFolderModalClick
                }
                setSharedUrl={setSharedUrl}
                date={item.created_at.slice(0, 10)}
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LinkList;
