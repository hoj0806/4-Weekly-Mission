import { FormEvent, Dispatch, SetStateAction, ChangeEvent } from "react";
import styles from "./LinkSearchInput.module.css";
import { LinkDataType } from "@/types/LinkDataTypes";
import Image from "next/image";
interface LinkSearchProps {
  setViewSearchData: Dispatch<SetStateAction<boolean | null>>;
  searchData: string | null;
  setSearchData: Dispatch<SetStateAction<string | null>>;
  setLinkData: Dispatch<SetStateAction<LinkDataType | null>>;
  linkData: LinkDataType | null;
  folderId: string;
  setViewData: Dispatch<SetStateAction<string | null>>;
}

const LinkSearchInput = ({
  setViewSearchData,
  searchData,
  setSearchData,
  setLinkData,
  folderId,
  setViewData,
}: LinkSearchProps) => {
  const fetchData = async () => {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/3/links${folderId}`)
      .then((res) => res.json())
      .then((result) => setLinkData(result));
  };

  const handleFilterClick = async () => {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/3/links${folderId}`)
      .then((res) => res.json())
      .then((result) => setLinkData(result));
    setLinkData((prev) => ({
      ...prev,
      data:
        prev?.data?.filter(
          (i) =>
            searchData &&
            (i.title.toUpperCase().includes(searchData.toUpperCase()) ||
              i.description.toUpperCase().includes(searchData.toUpperCase()) ||
              i.url.toUpperCase().includes(searchData.toUpperCase()))
        ) || [],
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setViewSearchData(true);
    handleFilterClick();
    setViewData(searchData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const onClickCancleIcon = (e: React.MouseEvent<HTMLImageElement>) => {
    fetchData();
    setViewSearchData(false);
    setSearchData("");
  };

  return (
    <div className={styles.link_search_input_wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.link_search_input}
          placeholder='링크를 검색해 보세요.'
          value={searchData || ""}
          onChange={handleInputChange}
        ></input>

        <Image
          src='/assets/images/search_icon.svg'
          className={styles.search_icon}
          alt='search_icon'
          width='16'
          height='16'
        />

        <Image
          className={styles["input_close_icon"]}
          src='/assets/images/search_input_close_icon.svg'
          alt='검색 취소 아이콘'
          onClick={onClickCancleIcon}
          width='24'
          height='24'
        />
      </form>
    </div>
  );
};

export default LinkSearchInput;
