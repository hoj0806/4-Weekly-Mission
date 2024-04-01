import styles from "./SharePageFolderList.module.css";
import { getSharedPageFolderData } from "@/api/sharedPageFolderData";
import SharePageFolderItem from "../SharPageFolderItem/SharePageFolderItem";

const SharePageFolderList = async () => {
  const folderData = await getSharedPageFolderData();
  return (
    <div className={styles.folder_list_wrapper}>
      {folderData?.folder.links.map((data) => (
        <SharePageFolderItem
          {...data}
          key={data.id}
          date={data.createdAt.slice(0, 10)}
        />
      ))}
    </div>
  );
};

export default SharePageFolderList;
