import LinkSearchInput from 'components/SharedPage/main/LinkSearchInput/LinkSearchInput';
import FolderFilterBox from '../FolderFilterBox/FolderFilterBox';
import LinkFuncButtonBox from '../LinkFuncButtonBox/LinkFuncButtonBox';
import styles from './FolderPageMain.module.css';
import AddFolderButtons from '../AddFolderButtons/AddFolderButtons';
import LinkList from '../LinkList/LinkList';
import { useFetch } from '../../../../hooks/useFetch';
import { Dispatch, SetStateAction, useState } from 'react';
import useModal from '../../../../hooks/useModal';
import ShareFolderModal from '../../modal/ShareFolderModal/ShareFolderModal';
import RenameFolderNameModal from '../../modal/RenameFolderNameModal/RenameFolderNameModal';
import DeleteFolderModal from '../../modal/DeleteFolderModal/DeleteFolderModal';
import AddFolderModal from '../../modal/AddFolderModal/AddFolderModal';
import AddLinkInFolder from '../../modal/AddLinkInFolder/AddLinkInFolder';
import { FolderData } from 'types/FolderPage/FolderDataType';
import ShowSearchData from '../ShowSearchData/ShowSearchData';
const folderUrl = 'https://bootcamp-api.codeit.kr/api/users/3/folders';

interface FolderPageMainProps {
  isShowAddLinkInFolderModal: boolean;
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  sharedUrl: string;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

function FolderPageMain({
  isShowAddLinkInFolderModal,
  handleAddLinkInFolderModalClick,
  sharedUrl,
  setSharedUrl,
}: FolderPageMainProps) {
  const { data: folderData } = useFetch<FolderData>(folderUrl);
  const [folderName, setFolderName] = useState('');
  const [isShowFuncButtonBox, setIsShowFuncButtonBox] = useState(false);
  const [folderId, setFolderId] = useState('');

  const {
    isShowModal: isShowShareFolderModal,
    handleModalClick: handleShareFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowRenameFolderModal,
    handleModalClick: handleRenameFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowDeleteFolderModal,
    handleModalClick: handleDeleteFolderModalClick,
  } = useModal(false);

  const {
    isShowModal: isShowAddFolderModal,
    handleModalClick: handleAddFolderModalClick,
  } = useModal(false);

  const [FolderModalValue, setFolderModalValue] = useState('');
  const [ShareUrlFolderId, setShareUrlFolderId] = useState('');
  const [viewSearchData, setViewSearchData] = useState<boolean | null>(false);
  const [searchData, setSearchData] = useState<string | null>('');

  return (
    <div className={styles.main_wrapper}>
      <LinkSearchInput
        setViewSearchData={setViewSearchData}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      {viewSearchData && <ShowSearchData searchData={searchData} />}
      <div className={styles.folder_page_content_wrapper}>
        <div className={styles.folder_filter_wrapper}>
          <FolderFilterBox
            folderData={folderData}
            setFolderName={setFolderName}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
            setFolderId={setFolderId}
            setFolderModalValue={setFolderModalValue}
            setShareUrlFolderId={setShareUrlFolderId}
          />
          <AddFolderButtons
            handleAddFolderModalClick={handleAddFolderModalClick}
          />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>{folderName}</h1>
          {isShowFuncButtonBox && (
            <LinkFuncButtonBox
              handleRenameFolderModalClick={handleRenameFolderModalClick}
              handleDeleteFolderModalClick={handleDeleteFolderModalClick}
              handleShareFolderModalClick={handleShareFolderModalClick}
            />
          )}
        </div>
        <LinkList
          folderId={folderId}
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          setSharedUrl={setSharedUrl}
        />
      </div>

      {isShowShareFolderModal && (
        <ShareFolderModal
          handleShareFolderModalClick={handleShareFolderModalClick}
          FolderModalValue={FolderModalValue}
          ShareUrlFolderId={ShareUrlFolderId}
        />
      )}
      {isShowRenameFolderModal && (
        <RenameFolderNameModal
          handleRenameFolderModalClick={handleRenameFolderModalClick}
          FolderModalValue={FolderModalValue}
        />
      )}
      {isShowDeleteFolderModal && (
        <DeleteFolderModal
          FolderModalValue={FolderModalValue}
          handleDeleteFolderModalClick={handleDeleteFolderModalClick}
        />
      )}
      {isShowAddFolderModal && (
        <AddFolderModal handleAddFolderModalClick={handleAddFolderModalClick} />
      )}
      {isShowAddLinkInFolderModal && (
        <AddLinkInFolder
          handleAddLinkInFolderModalClick={handleAddLinkInFolderModalClick}
          folderData={folderData}
          sharedUrl={sharedUrl}
        />
      )}
    </div>
  );
}

export default FolderPageMain;
