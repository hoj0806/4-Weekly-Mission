"use client";

import React from "react";

import styles from "./HomePageInfo.module.css";

const HomePageInfo = () => {
  return (
    <div className={styles["info_wrapper"]}>
      <div className={styles["info_detail_wrapper"]}>
        <div className={styles["info_text_box"]}>
          <p className={styles["info_title"]}>
            <span
              style={{
                background:
                  "linear-gradient(96deg, #FE8A8A 1.72%, #A4CEFF 74.97%)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              원하는 링크
            </span>
            를
            <br /> 저장하세요
          </p>
          <p className={styles["info_desciption"]}>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />한 공간에 저장하세요.
          </p>
        </div>
        <img src={`/assets/images/main_page_info_image_1.svg`} />
      </div>
      <div className={styles["info_detail_wrapper"]}>
        <div className={styles["info_text_box"]}>
          <p className={styles["info_title"]}>
            링크를 폴더로
            <br />
            <span
              style={{
                background:
                  "linear-gradient(277deg, #6FBAFF 59.22%, #FFD88B 93.66%)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              관리
            </span>
            하세요
          </p>
          <p className={styles["info_desciption"]}>
            나만의 폴더를 무제한으로 만들고
            <br />
            다양하게 활용할 수 있습니다.
          </p>
        </div>
        <img src={`/assets/images/main_page_info_image_2.svg`} />
      </div>
      <div className={styles["info_detail_wrapper"]}>
        <div className={styles["info_text_box"]}>
          <p className={styles["info_title"]}>
            저장한 링크를
            <br />
            <span
              style={{
                background:
                  "linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              공유
            </span>
            해 보세요.
          </p>
          <p className={styles["info_desciption"]}>
            여러 링크를 폴더에 담고 공유할 수 있습니다.
            <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를
            <br />
            공유해 보세요.
          </p>
        </div>
        <img src={`/assets/images/main_page_info_image_3.svg`} />
      </div>
      <div className={styles["info_detail_wrapper"]}>
        <div className={styles["info_text_box"]}>
          <p className={styles["info_title"]}>
            저장한 링크를
            <br />
            <span
              style={{
                background:
                  "linear-gradient(271deg, #FE578F -9.84%, #68E8F9 107.18%)",
                backgroundClip: "text",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              검색
            </span>
            해 보세요
          </p>
          <p className={styles["info_desciption"]}>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
        </div>
        <img src={`/assets/images/main_page_info_image_4.svg`} />
      </div>
    </div>
  );
};

export default HomePageInfo;
