import styles from "./DeleteButton.module.css";
import { childrenProps } from "../ModalWrapper/ModalWrapper";
export default function DeleteModalButton({
  children,
  handleDeleteButton,
}: childrenProps) {
  return (
    <button className={styles["modal-button"]} onClick={handleDeleteButton}>
      {children}
    </button>
  );
}
