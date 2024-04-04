"use client";
import styles from "./SignHeader.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SignHeader = () => {
  const pathName = usePathname();

  return (
    <div className={styles["main_wrapper"]}>
      <Link href='/'>
        <img src='/assets/images/sign_linkbrary_logo.svg' />
      </Link>
      <div className={styles["sign_text_wrapper"]}>
        <div className={styles["sign_text"]}>
          {pathName === "/signin" ? "회원이 아니신가요?" : "이미 회원이신가요?"}
        </div>
        <Link href={pathName === "/signin" ? "/signup" : "/signin"}>
          <button className={styles["sign_button"]}>
            {pathName === "/signin" ? "회원 가입하기" : "로그인 하기"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignHeader;
