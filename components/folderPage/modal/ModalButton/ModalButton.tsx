import styles from "./ModalButton.module.css";
import { childrenProps } from "../ModalWrapper/ModalWrapper";
export default function ModalButton({
  children,

  handleAddModalClick,
}: childrenProps) {
  return (
    <button className={styles["modal-button"]} onClick={handleAddModalClick}>
      {children}
    </button>
  );
}
