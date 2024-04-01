import styles from "./FolderFilterButton.module.css";
interface FolderFilterButtonProps {
  name: string;
  isActive: boolean;
  handleClick: () => void;
}
const FolderFilterButton = ({
  name,
  isActive,
  handleClick,
}: FolderFilterButtonProps) => {
  return (
    <>
      <button
        className={styles.filter_button}
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? "#6d6afe" : "#fff",
          color: isActive ? "#fff" : "#000",
        }}
      >
        {name}
      </button>
    </>
  );
};

export default FolderFilterButton;
