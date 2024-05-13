import styles from "./AddFolderModal.module.css";
import ModalButton from "../ModalButton/ModalButton";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFolder } from "@/api/folders";

const AddFolderModal = ({
  handleAddFolderModalClick,
}: {
  handleAddFolderModalClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}) => {
  const queryClient = useQueryClient();
  const [addFolderName, setAddFolderName] = useState();
  const addFolderByName = useMutation({
    mutationFn: addFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });
  const onChangeFolderNameInput = (e) => {
    setAddFolderName(e.target.value);
  };
  const handleAddModalClick = () => {
    addFolderByName.mutate(addFolderName, {});
    handleAddFolderModalClick();
  };
  return (
    <ModalWrapper>
      <div className={styles["modal-wrapper"]}>
        <div className={styles["modal-main-wrapper"]}>
          <div className={styles["modal-title"]}>폴더 추가</div>
          <input
            className={styles["modal-input"]}
            placeholder='내용 입력'
            value={addFolderName}
            onChange={onChangeFolderNameInput}
          />
          <img
            src='/assets/images/modal_close_icon.svg'
            className={styles["modal-close-icon"]}
            alt='modal-close-icon'
            onClick={handleAddFolderModalClick}
          />
        </div>
        <ModalButton handleAddModalClick={handleAddModalClick}>
          추가하기
        </ModalButton>
      </div>
    </ModalWrapper>
  );
};

export default AddFolderModal;
