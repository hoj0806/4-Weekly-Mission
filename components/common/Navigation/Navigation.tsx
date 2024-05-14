"use client";

import styles from "./Navigation.module.css";

import NavLoginButton from "../NavLoginButton/NavLoginButton";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/api/user";
const Navigation = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  });

  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-inside-wrapper"]}>
        <Link href='/'>
          <Image
            className={styles["header-logo"]}
            src='/assets/images/nav_logo.svg'
            alt='Linkbrary_logo'
            width='133'
            height='24'
          />
        </Link>
        <div className={styles["profile-wrapper"]}>
          {accessToken !== undefined ? (
            <>
              {data?.map((item) => {
                return (
                  <>
                    <img
                      src={item?.image_source}
                      alt='user_profile_image'
                      className={styles["nav-profile-image"]}
                    />
                    <p className={styles["profile-email"]}>{item?.email}</p>
                  </>
                );
              })}
            </>
          ) : (
            <Link href='/signin'>
              <NavLoginButton />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
