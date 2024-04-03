import styles from "./HomePageInfoDetail.module.css";

interface HomePafeInfoDetailProps {
  title: JSX.Element;
  description: JSX.Element;
  index: number;
}

const HomePageInfoDetail = ({
  title,
  description,
  index,
}: HomePafeInfoDetailProps) => {
  return (
    <div className={styles["info_wrapper"]}>
      <div className={styles["info_text_box"]} style={{ order: index % 2 }}>
        <p className={styles["info_title"]}>{title}</p>
        <p className={styles["info_desciption"]}>{description}</p>
      </div>
      <img src={`/assets/images/main_page_info_image_${index + 1}.svg`} />
    </div>
  );
};

export default HomePageInfoDetail;
