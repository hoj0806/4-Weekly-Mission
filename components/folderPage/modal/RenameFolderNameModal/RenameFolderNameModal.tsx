import styles from "./RenameFolderNameModal.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalButton from "../ModalButton/ModalButton";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { renameFolder } from "@/api/folders";
import { useQueryClient } from "@tanstack/react-query";
interface RenameFolderNameProps {
  handleRenameFolderModalClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  FolderModalValue: string;
  folderId: number;
}
const RenameFolderNameModal = ({
  handleRenameFolderModalClick,
  FolderModalValue,
  folderId,
}: RenameFolderNameProps) => {
  const [folderName, setFolderName] = useState("");
  const queryClient = useQueryClient();

  const onChangeInput = (e) => {
    setFolderName(e.target.value);
  };

  const renameFolders = useMutation({
    mutationFn: ([folderName, folderId]: [string, number]) =>
      renameFolder(folderName, folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });

  console.log(folderId);
  const handleAddButton = () => {
    renameFolders.mutate([folderName, folderId]);
    handleRenameFolderModalClick();
  };
  return (
    <ModalWrapper>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-main-wrapper"]}>
          <div className={styles["modal-title"]}>폴더 이름 변경</div>
          <input
            className={styles["modal-input"]}
            placeholder='내용 입력'
            value={folderName}
            onChange={onChangeInput}
          />
          <img
            src='/assets/images/modal_close_icon.svg'
            className={styles["modal-close-icon"]}
            onClick={handleRenameFolderModalClick}
            alt='modal-close-icon'
          />
        </div>
        <ModalButton handleAddButton={handleAddButton}>확인하기</ModalButton>
      </div>
    </ModalWrapper>
  );
};

export default RenameFolderNameModal;
