import styles from "./Navigation.module.css";
import NavLoginButton from "../NavLoginButton/NavLoginButton";
const userDataUrl = "https://bootcamp-api.codeit.kr/api/sample/user";

function Navigation() {
  return (
    <div className={styles["nav-wrapper"]}>
      <div className={styles["nav-inside-wrapper"]}>
        <a href='/'>
          <img
            className={styles["header-logo"]}
            src='/assets/images/nav_logo.svg'
            alt='Linkbrary_logo'
          />
        </a>
        {/* <div className={styles["profile-wrapper"]}>
          {!userData?.email ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={userData?.profileImageSource}
                alt='user_profile_image'
                className={styles["nav-profile-image"]}
              />
              <p className={styles["profile-email"]}>{userData.email}</p>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Navigation;
