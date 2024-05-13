import styles from "./ModalButton.module.css";
import { childrenProps } from "../ModalWrapper/ModalWrapper";
export default function ModalButton({
  children,

  handleAddButton,
}: childrenProps) {
  return (
    <button className={styles["modal-button"]} onClick={handleAddButton}>
      {children}
    </button>
  );
}
