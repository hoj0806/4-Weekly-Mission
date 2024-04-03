import styles from "./SignInForm.module.css";

const SignInForm = () => {

  return (
    <>
      <form>
        <div>
          <label>이메일</label>
          <input />
        </div>
        <div>
          <label>비밀번호</label>
          <input />
        </div>
      </form>
      <div className={styles["footer_wrapper"]}>
        <button className={styles["submit_button"]}>로그인</button>
        <div className={styles["social_sign_box"]}>
          <div className={styles["social_sign_text_box"]}>소셜 로그인</div>
          <div className={styles["social_sign_icon_box"]}>
            <img src='/assets/images/social_sign_google_icon.svg' />
            <img src='/assets/images/social_sign_kakao_icon.svg' />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
