import stlyes from "./SignupForm.module.css";

const SignUpForm = () => {
  return (
    <>
      <form className={stlyes["sign_form"]}>
        <div className={stlyes["sign_input_box"]}>
          <label>이메일</label>
          <input className={stlyes["sign_input"]} />
        </div>
        <div className={stlyes["sign_input_box"]}>
          <label>비밀번호</label>
          <input className={stlyes["sign_input"]} />
        </div>
        <div className={stlyes["sign_input_box"]}>
          <label>비밀번호 확인</label>
          <input className={stlyes["sign_input"]} />
        </div>
      </form>
      <div className={stlyes["footer_wrapper"]}>
        <button className={stlyes["submit_button"]}>회원가입</button>
        <div className={stlyes["social_sign_box"]}>
          <div className={stlyes["social_sign_text_box"]}>
            다른 방식으로 가입하기
          </div>
          <div className={stlyes["social_sign_icon_box"]}>
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

export default SignUpForm;
