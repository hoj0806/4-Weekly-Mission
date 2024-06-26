import styles from "./AddLink.module.css";
import AddLinkInput from "../AddLinkInput/AddLinkInput";
import { Dispatch, SetStateAction } from "react";

interface AddLinkProps {
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

const AddLink = ({
  handleAddLinkInFolderModalClick,
  setSharedUrl,
}: AddLinkProps) => {
  return (
    <div className={styles["add-link-wrapper"]}>
      <AddLinkInput
        handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
        setSharedUrl={setSharedUrl}
      />
    </div>
  );
};

export default AddLink;
