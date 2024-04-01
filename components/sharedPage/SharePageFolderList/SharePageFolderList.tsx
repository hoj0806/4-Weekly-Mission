import styles from "./SharePageFolderList.module.css";
import { getSharedPageFolderData } from "@/api/sharedPageFolderData";
import SharePageFolderItem from "../SharPageFolderItem/SharePageFolderItem";
const SharePageFolderList = async () => {
  const folderData = await getSharedPageFolderData();
  console.log(folderData);
  return (
    <div className={styles.folder_list_wrapper}>
      {folderData?.folder.links.map(
        ({ id, createdAt, url, title, imageSource }) => (
          <SharePageFolderItem
            title={title}
            imageSource={imageSource}
            createdAt={createdAt}
            url={url}
            key={id}
          />
        )
      )}
    </div>
  );
};

export default SharePageFolderList;
