import styles from "./SharePageFolderItem.module.css";
import * as functions from "@/functions/formatTimeAgo";

interface FolderDataType {
  createdAt: string;
  url: string;
  title: string;
  imageSource: string;
  date: string;
}

function SharePageFolderItem({
  createdAt,
  url,
  title,
  imageSource,
  date,
}: FolderDataType) {
  return (
    <a href={url} className={styles.folder_link}>
      <div className={styles.folder_item_box}>
        {imageSource ? (
          <div className={styles.folder_image_box}>
            <img
              src={imageSource}
              className={styles.folder_image}
              alt='folder_image'
            />
          </div>
        ) : (
          <div className={styles.folder_image_box}>
            <img
              src='/assets/images/folder_no_image.svg'
              className={styles.folder_image}
              alt='folder_no_image'
            />
          </div>
        )}

        <div className={styles.folder_detail_box}>
          <div className={styles.folder_createdAt}>
            {functions.formatTimeAgo(createdAt)}
          </div>
          <div className={styles.folder_title}>{title}</div>
          <div className={styles.folder_date}>{date}</div>
        </div>
      </div>
    </a>
  );
}

export default SharePageFolderItem;
