"use client";

import styles from "./SharePageLinkList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getLinksByFolderId } from "@/api/links";
import { getAllFolders } from "@/api/folders";
import SharePageFolderItem from "../SharPageFolderItem/SharePageFolderItem";
const SharePageFolderList = ({ params }: any) => {
  console.log(params);

  const { data, isLoading, error } = useQuery({
    queryKey: ["links"],
    queryFn: () => getLinksByFolderId(params.folderId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div className={styles.folder_list_wrapper}>
      {data.map((data) => (
        <SharePageFolderItem
          {...data}
          key={data.id}
          date={data.created_at.slice(0, 10)}
        />
      ))}
    </div>
  );
};

export default SharePageFolderList;
