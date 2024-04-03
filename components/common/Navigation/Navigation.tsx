import styles from "./Navigation.module.css";
import { getUserData } from "@/api/userData";
import NavLoginButton from "../NavLoginButton/NavLoginButton";
import Link from "next/link";
import Image from "next/image";
const Navigation = async () => {
  const userData = await getUserData();

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
          <Link href='/signin'>
            <NavLoginButton />
          </Link>

          {/* {!userData.email ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={userData.image_source}
                alt='user_profile_image'
                className={styles["nav-profile-image"]}
              />
              <p className={styles["profile-email"]}>{userData.email}</p>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
