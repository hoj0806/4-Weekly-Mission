import styles from "./AddLinkButton.module.css";

interface AddLinkButtonProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
}
function AddLinkButton({
  handleAddLinkInFolderModalClick,
}: AddLinkButtonProps) {
  return (
    <button
      className={styles["add-link-button"]}
      onClick={handleAddLinkInFolderModalClick}
    >
      추가하기
    </button>
  );
}

export default AddLinkButton;
