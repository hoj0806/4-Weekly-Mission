import styles from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <>
      <form className={styles["sign_form"]}>
        <div className={styles["sign_input_box"]}>
          <label>이메일</label>
          <input className={styles["sign_input"]} />
        </div>
        <div className={styles["sign_input_box"]}>
          <label>비밀번호</label>
          <input className={styles["sign_input"]} />
        </div>
      </form>
      <div className={styles["footer_wrapper"]}>
        <button className={styles["submit_button"]}>로그인</button>
        <div className={styles["social_sign_box"]}>
          <div className={styles["social_sign_text_box"]}>소셜 로그인</div>
          <div className={styles["social_sign_icon_box"]}>
            <button>
              <img src='/assets/images/social_sign_google_icon.svg' />
            </button>
            <button>
              <img src='/assets/images/social_sign_kakao_icon.svg' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
