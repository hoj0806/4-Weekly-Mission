import styles from "./FolderPageLinkitem.module.css";
import * as functions from "@/functions/formatTimeAgo";
import KebabModal from "../modal/KebabModal/KebabModal";
import useModal from "@/hooks/useModal";
import DeleteLinkModal from "../modal/DeleteLinkModal/DeleteLinkModal";
import { Dispatch, SetStateAction } from "react";
interface FoldrPageLinkItemProps {
  description: string;
  image_source: string;
  created_at: string;
  url: string;
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
  date: string;
}

const FolderPageLinkItem = ({
  description,
  image_source,
  created_at,
  url,
  handleAddLinkInFolderModalClick,
  setSharedUrl,
  date,
}: FoldrPageLinkItemProps) => {
  const {
    isShowModal: isShowKebabModal,
    handleModalClick: handleClickKebabModal,
  } = useModal(false);

  const {
    isShowModal: isShowDeleteLinkModal,
    handleModalClick: handleDeleteLinkModalClick,
  } = useModal(false);

  return (
    <>
      <div className={styles.item_card_wrapper}>
        <a href={url} className={styles.item_card_link}>
          <div className={styles.item_card_image_box}>
            {!image_source ? (
              <img
                src='/assets/images/folder_no_image.svg'
                className={styles.item_card_image}
                alt='card_no_image'
              />
            ) : (
              <img
                src={image_source}
                className={styles.item_card_image}
                alt='card_image'
              />
            )}
          </div>
        </a>
        <img
          src='/assets/images/item_card_star_icon.svg'
          className={styles.item_card_star_icon}
          alt='card_star_icon'
        />
        <div className={styles.item_card_text_box}>
          <div className={styles.item_card_createdAt}>
            {functions.formatTimeAgo(created_at)}
          </div>
          <div className={styles.item_card_description}>{description}</div>
          <div className={styles.item_card_created_date}>{date}</div>
          <img
            src='/assets/images/item_card_kebab_icon.svg'
            className={styles.item_card_kebab_icon}
            alt='card_kebab_image'
            onClick={handleClickKebabModal}
          />
        </div>
        {isShowKebabModal && (
          <KebabModal
            handleClickKebabModal={handleClickKebabModal}
            handleDeleteLinkModalClick={handleDeleteLinkModalClick}
            handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
            url={url}
            setSharedUrl={setSharedUrl}
          />
        )}
      </div>
      {isShowDeleteLinkModal && (
        <DeleteLinkModal
          url={url}
          handleDeleteLinkModalClick={handleDeleteLinkModalClick}
        />
      )}
    </>
  );
};

export default FolderPageLinkItem;