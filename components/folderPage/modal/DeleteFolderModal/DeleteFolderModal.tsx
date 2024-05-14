import styles from "./DeleteFolderModal.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import DeleteModalButton from "../DeleteButton/DeleteButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFolder } from "@/api/folders";
import { useRouter } from "next/navigation";
interface DeleteFolderModalProps {
  FolderModalValue: string;
  handleDeleteFolderModalClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}
const DeleteFolderModal = ({
  FolderModalValue,
  handleDeleteFolderModalClick,
  folderId,
}: DeleteFolderModalProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteFolderById = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
      router.push("/folder");
    },
  });

  console.log(folderId);
  const handleDeleteButton = () => {
    deleteFolderById.mutate(folderId);
    handleDeleteFolderModalClick();
  };
  return (
    <ModalWrapper>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-main-wrapper"]}>
          <div className={styles["modal-title"]}>폴더 삭제</div>
          <div className={styles["modal-folder-name"]}>{FolderModalValue}</div>
          <img
            src='/assets/images/modal_close_icon.svg'
            className={styles["modal-close-icon"]}
            alt='modal-close-icon'
            onClick={handleDeleteFolderModalClick}
          />
        </div>
        <DeleteModalButton handleDeleteButton={handleDeleteButton}>
          삭제하기
        </DeleteModalButton>
      </div>
    </ModalWrapper>
  );
};

export default DeleteFolderModal;
