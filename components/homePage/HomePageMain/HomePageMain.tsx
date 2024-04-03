import styles from "./HomePageMain.module.css";
import AddLinkButton from "../AddLinkButton/AddLinkButton";
import MainImageBox from "../MainImageBox/MainImageBox";
const HomePageMain = () => {
  return (
    <div className={styles["main_wrapper"]}>
      <div className={styles["main_title"]}>
        <span>세상의 모든 정보</span>를 <br></br>쉽게 저장하고 관리해 보세요
      </div>
      <AddLinkButton />
      <MainImageBox />
    </div>
  );
};

export default HomePageMain;
