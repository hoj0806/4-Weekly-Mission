"use client";

import styles from "./SharePageLinkList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getLinksByFolderId } from "@/api/links";
const SharePageFolderList = ({ params }) => {
  console.log(params);

  const { data } = useQuery({
    queryKey: ["shared"],
    queryFn: () => getLinksByFolderId(params.folderId),
  });

  console.log(data);
  return (
    <div className={styles.folder_list_wrapper}>
      {/* {folderData?.folder.links.map((data) => (
        <SharePageFolderItem
          {...data}
          key={data.id}
          date={data.createdAt.slice(0, 10)}
        />
      ))} */}
    </div>
  );
};

export default SharePageFolderList;
