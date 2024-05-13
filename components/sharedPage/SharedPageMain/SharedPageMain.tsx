import styles from "./SharedPageMain.module.css";
import LinkSearchInput from "@/components/common/LinkSearchInput/LinkSearchInput";
import SharePageFolderList from "../SharePageFolderList/SharePageLinkList";

const SharedPageMain = () => {
  return (
    <div className={styles.main_wrapper}>
      {/* <LinkSearchInput
       /> */}
      <SharePageFolderList />
    </div>
  );
};

export default SharedPageMain;
