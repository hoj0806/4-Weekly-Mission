import styles from "./MainImageBox.module.css";

const MainImageBox = () => {
  return (
    <div className={styles["image_box_wrapper"]}>
      <img src='/assets/images/main_title_image.svg' />
    </div>
  );
};

export default MainImageBox;
