"use client";

import styles from "./SignInForm.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";

interface FormValueType {
  email: string;
  password: string;
}
const SignInForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({ mode: "onBlur" });

  const [loginError, setLoginError] = useState({});
  const onSubmit = (data: FormValueType) => {
    if (data.email !== "test@codeit.com") {
      setLoginError({
        ...loginError,
        emailLoginErrorMessage: "이메일을 확인해 주세요.",
        passwordLoginErrorMessage: "비밀번호를 확인해 주세요.",
      });
    }
  };
  const handleSuccess = () => {
    // 원하는 함수 실행
    console.log("유효성 검사 통과 - 원하는 함수 실행");
  };
  console.log(loginError);
  return (
    <>
      <form
        className={styles["sign_form"]}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={styles["sign_input_box"]}>
          <label htmlFor='emai'>이메일</label>
          <input
            placeholder='이메일을 입력해 주세요.'
            type='email'
            id='email'
            className={`${errors.email && styles["invalid"]}`}
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "올바른 이메일 주소가 아닙니다.",
              },
            })}
          />
          <p className={styles["input_error_message"]}>
            {(errors.email && errors.email?.message) ||
              loginError?.emailLoginErrorMessage}
          </p>
        </div>
        <div className={styles["sign_input_box"]}>
          <label htmlFor='password'>비밀번호</label>
          <input
            placeholder='비밀번호를 입력해 주세요.'
            className={styles["sign_input"]}
            type='password'
            id='password'
            {...register("password")}
          />
        </div>

        <p className={styles["input_error_message"]}>
          {loginError?.passwordLoginErrorMessage}
        </p>
        <button className={styles["submit_button"]}>로그인</button>
      </form>
      <div className={styles["footer_wrapper"]}>
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
      <DevTool control={control} />
    </>
  );
};

export default SignInForm;
