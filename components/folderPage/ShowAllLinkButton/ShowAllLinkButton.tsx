import styles from "./ShowAllLinksButton.module.css";
interface ShowAllLinksButtonProps {
  name: string;
  activeFilterId: string;
  handleClick: () => void;
}

const ShowAllLinksButton = ({
  name,
  activeFilterId,
  handleClick
}: ShowAllLinksButtonProps) => {
  const isFilterShowAll = activeFilterId === "showAll";

  return (
    <button
      className={styles.filter_button}
      onClick={handleClick}
      style={{
        backgroundColor: isFilterShowAll ? "#6d6afe" : "#fff",
        color: isFilterShowAll ? "#fff" : "#000",
      }}
    >
      {name}
    </button>
  );
};

export default ShowAllLinksButton;
