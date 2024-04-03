"use client";

import { usePathname } from "next/navigation";
import styles from "./SignFooter.module.css";

const SignFooter = () => {
  const pathName = usePathname();
  return (
    <div className={styles["main_wrapper"]}>
      <button className={styles["submit_button"]}>
        {pathName === "/signin" ? "로그인" : "회원가입"}
      </button>
      <div className={styles["social_sign_box"]}>
        <div className={styles["social_sign_text_box"]}>
          {pathName === "/signin" ? "소셜 로그인" : "다른 방식으로 가입하기"}
        </div>
        <div className={styles["social_sign_icon_box"]}>
          <img src='/assets/images/social_sign_google_icon.svg' />
          <img src='/assets/images/social_sign_kakao_icon.svg' />
        </div>
      </div>
    </div>
  );
};

export default SignFooter;
