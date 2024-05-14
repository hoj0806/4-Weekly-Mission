import styles from "./FolderPageLinkitem.module.css";
import * as functions from "@/functions/formatTimeAgo";
import KebabModal from "../modal/KebabModal/KebabModal";
import useModal from "@/hooks/useModal";
import DeleteLinkModal from "../modal/DeleteLinkModal/DeleteLinkModal";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteLink } from "@/api/links";
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
  linkId: number;
  favorite: boolean;
}

const FolderPageLinkItem = ({
  description,
  image_source,
  created_at,
  url,
  handleAddLinkInFolderModalClick,
  setSharedUrl,
  date,
  linkId,
  favorite,
}: FoldrPageLinkItemProps) => {
  const {
    isShowModal: isShowKebabModal,
    handleModalClick: handleClickKebabModal,
  } = useModal(false);

  const queryClient = useQueryClient();
  const {
    isShowModal: isShowDeleteLinkModal,
    handleModalClick: handleDeleteLinkModalClick,
  } = useModal(false);

  const makeFavortie = useMutation({
    mutationFn: ([linkId, favortieBoolean]: [number, boolean]) => {
      favoriteLink(linkId, favortieBoolean);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  const handleStarIcon = () => {
    console.log(linkId);
    makeFavortie.mutate([linkId, !favorite]);
  };
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
        {favorite === true ? (
          <img
            src='/assets/images/favortie_link.svg'
            className={styles.item_card_star_icon}
            alt='card_star_icon'
            onClick={handleStarIcon}
          />
        ) : (
          <img
            src='/assets/images/item_card_star_icon.svg'
            className={styles.item_card_star_icon}
            alt='card_star_icon'
            onClick={handleStarIcon}
          />
        )}

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
          linkId={linkId}
        />
      )}
    </>
  );
};

export default FolderPageLinkItem;
