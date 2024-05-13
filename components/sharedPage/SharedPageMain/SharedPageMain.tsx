import styles from "./SharedPageMain.module.css";
import LinkSearchInput from "@/components/common/LinkSearchInput/LinkSearchInput";
import SharePageFolderList from "../SharePageFolderList/SharePageLinkList";

const SharedPageMain = ({ params }) => {
  return (
    <div className={styles.main_wrapper}>
      {/* <LinkSearchInput
       /> */}
      <SharePageFolderList params={params} />
    </div>
  );
};

export default SharedPageMain;
