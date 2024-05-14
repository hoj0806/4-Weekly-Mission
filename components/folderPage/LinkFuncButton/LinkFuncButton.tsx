import styles from "./LinkFuncButton.module.css";

interface LinkFuncButtonProps {
  buttonName: string;
  buttonImageSourceName: string;
  handleRenameFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleDeleteFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleShareFolderModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LinkFuncButton = ({
  buttonName,
  buttonImageSourceName,
  handleRenameFolderModalClick,
  handleDeleteFolderModalClick,
  handleShareFolderModalClick,
}: LinkFuncButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonName === "이름 변경") {
      handleRenameFolderModalClick(e);
    } else if (buttonName === "삭제") {
      handleDeleteFolderModalClick(e);
    } else if (buttonName === "공유") {
      handleShareFolderModalClick(e);
    }
  };
  return (
    <button className={styles.link_func_button} onClick={handleClick}>
      {buttonName}
      <img
        src={`/assets/images/${buttonImageSourceName}_button_icon.svg`}
        alt='link_func_button'
      />
    </button>
  );
};

export default LinkFuncButton;
