import styles from "./AddLinkInput.module.css";
import AddLinkButton from "../AddLinkButton/AddLinkButton";
import { ChangeEvent } from "react";
import { Dispatch, SetStateAction } from "react";

interface AddLinkInputProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

const AddLinkInput = ({
  handleAddLinkInFolderModalClick,
  setSharedUrl,
}: AddLinkInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSharedUrl(e.target.value);
  };
  return (
    <>
      <div className={styles["add-link-input-wrapper"]}>
        <input
          className={styles["add-link-input"]}
          placeholder='링크를 추가해 보세요'
          onChange={handleInputChange}
        />
        <img
          src='/assets/images/add_link_input_icon.svg'
          alt='add_link_input_icon'
          className={styles["add-link-input-icon"]}
        />
        <AddLinkButton
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        />
      </div>
    </>
  );
};

export default AddLinkInput;
