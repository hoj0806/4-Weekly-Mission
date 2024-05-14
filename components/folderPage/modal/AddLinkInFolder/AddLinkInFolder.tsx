import styles from "./AddLinkInFolder.module.css";
import ModalButton from "../ModalButton/ModalButton";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { FolderDataType } from "@/types/FolderDataTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllFolders } from "@/api/folders";
import { useState } from "react";
import { addLinkInFolder } from "@/api/links";
import { useRouter } from "next/navigation";
interface isShowAddLinkInFolderProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  folderData: FolderDataType | null;
  sharedUrl: string;
}
const AddLinkInFolder = ({
  handleAddLinkInFolderModalClick,

  sharedUrl,
}: isShowAddLinkInFolderProps) => {
  const { data } = useQuery({
    queryKey: ["folders"],
    queryFn: getAllFolders,
  });
  const queryClient = useQueryClient();

  const [selectFolderId, setSelectFolderId] = useState();

  const router = useRouter();

  
  const addLink = useMutation({
    mutationFn: ([url, folderId]: [string, number]) =>
      addLinkInFolder(url, folderId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      router.push(`${selectFolderId}`);
    },
  });

  console.log(selectFolderId);
  const handleAddButton = () => {
    addLink.mutate([sharedUrl, selectFolderId]);
    handleAddLinkInFolderModalClick();
  };
  return (
    <ModalWrapper>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-main-wrapper"]}>
          <div className={styles["modal-title"]}>폴더에 추가</div>
          <div className={styles["link-url"]}>{sharedUrl}</div>
          <img
            src='/assets/images/modal_close_icon.svg'
            className={styles["modal-close-icon"]}
            alt='modal-close-icon'
            onClick={handleAddLinkInFolderModalClick}
          />
        </div>
        <ul className={styles["folder-list"]}>
          {data.map(({ name, link_count, id }, i) => {
            return (
              <li
                key={i}
                className={
                  id === selectFolderId
                    ? styles["list-item-wrapper-active"]
                    : styles["list-item-wrapper"]
                }
                onClick={() => {
                  setSelectFolderId(id);
                }}
              >
                <p className={styles["folder-name"]}>{name}</p>
                <p className={styles["link-count"]}>
                  {data.count === 0 ? (
                    <div>링크가 없습니다</div>
                  ) : (
                    <div>{`${link_count}개 링크`}</div>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
        <ModalButton handleAddButton={handleAddButton}>추가하기</ModalButton>
      </div>
    </ModalWrapper>
  );
};

export default AddLinkInFolder;
