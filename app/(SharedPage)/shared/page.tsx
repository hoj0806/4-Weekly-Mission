"use client";

import LinkSearchInput from "@/components/common/LinkSearchInput/LinkSearchInput";
import Profile from "@/components/sharedPage/Profile/Profile";
import styles from "@/styles/Shared.module.css";
import { useState } from "react";

interface FolderDesc {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

interface FolderIdData {
  data: FolderDesc[];
}

const SharedPage = () => {
  const [viewSearchData, setViewSearchData] = useState<boolean | null>(false);
  const [searchData, setSearchData] = useState<string | null>("");
  const [filterData, setFilterData] = useState<FolderIdData | null>(null);
  const [folderId, setFolderId] = useState("");
  const [viewData, setViewData] = useState<string | null>("");
  return (
    <>
      <Profile />
      <div className={styles.main_wrapper}>
        <LinkSearchInput
          setViewSearchData={setViewSearchData}
          searchData={searchData}
          setSearchData={setSearchData}
          setFilterData={setFilterData}
          filterData={filterData}
          folderId={folderId}
          setViewData={setViewData}
        />
      </div>
    </>
  );
};

export default SharedPage;
