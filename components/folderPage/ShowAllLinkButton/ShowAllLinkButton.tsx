import styles from "./ShowAllLinksButton.module.css";
interface ShowAllLinksButtonProps {
  name: string;
}

const ShowAllLinksButton = ({
  handleClick,
  isActive,
}: ShowAllLinksButtonProps) => {
  return (
    <button
      className={styles.filter_button}
      onClick={handleClick}
      style={{
        backgroundColor: isActive ? "#6d6afe" : "#fff",
        color: isActive ? "#fff" : "#000",
      }}
    >
      전체
    </button>
  );
};

export default ShowAllLinksButton;
