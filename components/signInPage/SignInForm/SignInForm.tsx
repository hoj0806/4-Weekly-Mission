"use client";

import styles from "./SignInForm.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputEyeButton from "@/components/common/InputEyeButton/InputEyeButton";
interface FormValueType {
  email: string;
  password: string;
}
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({ mode: "onBlur" });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, []);

  const [passwordInputType, setPasswordInputType] =
    useState<string>("password");

  const [emailLoginError, setEmailLoginError] = useState("");
  const [passwordLoginError, setPasswordLoginError] = useState("");
  const router = useRouter();
  const onSubmit = async (data: FormValueType) => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/linkbrary/v1/auth/sign-in",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );
      if (!response.ok) {
        setEmailLoginError("이메일을 확인해 주세요.");
        setPasswordLoginError("비밀번호를 확인해 주세요.");
        return;
      }
      const json = await response.json();
      console.log(json);
      const accessToken = json.accessToken;
      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch (error) {
      console.log(error);
    }
  };

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
            onClick={() => setEmailLoginError("")}
            placeholder='이메일을 입력해 주세요.'
            type='email'
            id='email'
            className={`${
              (errors.email || emailLoginError) && styles["invalid"]
            }`}
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
            {(errors.email && errors.email?.message) || emailLoginError}
          </p>
        </div>
        <div className={styles["sign_input_box"]}>
          <label htmlFor='password'>비밀번호</label>
          <InputEyeButton setPasswordInputType={setPasswordInputType} />
          <input
            onClick={() => setPasswordLoginError("")}
            placeholder='비밀번호를 입력해 주세요.'
            className={`${
              (errors.password || passwordLoginError) && styles["invalid"]
            }`}
            type={passwordInputType}
            id='password'
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
            })}
          />
        </div>

        <p className={styles["input_error_message"]}>
          {(errors.password && errors.password?.message) || passwordLoginError}
        </p>
        <button className={styles["submit_button"]}>로그인</button>
      </form>
      <div className={styles["footer_wrapper"]}>
        <div className={styles["social_sign_box"]}>
          <div className={styles["social_sign_text_box"]}>소셜 로그인</div>
          <div className={styles["social_sign_icon_box"]}>
            <Link href='https://www.google.com'>
              <button>
                <img src='/assets/images/social_sign_google_icon.svg' />
              </button>
            </Link>

            <Link href='https://www.kakaocorp.com/page'>
              <button>
                <img src='/assets/images/social_sign_kakao_icon.svg' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
