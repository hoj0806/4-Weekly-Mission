import ModalWrapper from "../ModalWrapper/ModalWrapper";
import DeleteModalButton from "../DeleteButton/DeleteButton";
import styles from "./DeleteLinkModal.module.css";
import { useMutation } from "@tanstack/react-query";
import { deleteLink } from "@/api/links";
import { useQueryClient } from "@tanstack/react-query";
interface DeleteLinkModalProps {
  url: string;
  handleDeleteLinkModalClick: React.MouseEventHandler<HTMLImageElement>;
  linkId: number;
}

export default function DeleteLinkModal({
  handleDeleteLinkModalClick,
  url,
  linkId,
}: DeleteLinkModalProps) {
  const queryClient = useQueryClient();

  const deleteLinks = useMutation({
    mutationFn: ([linkId]: [number]) => deleteLink(linkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const handleDeleteButton = () => {
    deleteLinks.mutate([linkId]);
    handleDeleteLinkModalClick();
  };

  return (
    <ModalWrapper>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-main-wrapper"]}>
          <div className={styles["modal-title"]}>링크 삭제</div>
          <div className={styles["modal-link-url"]}>{url}</div>
          {linkId}
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/modal_close_icon.svg`}
            className={styles["modal-close-icon"]}
            alt='modal-close-icon'
            onClick={handleDeleteLinkModalClick}
          />
        </div>
        <DeleteModalButton handleDeleteButton={handleDeleteButton}>
          삭제하기
        </DeleteModalButton>
      </div>
    </ModalWrapper>
  );
}
