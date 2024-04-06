"use client";
import styles from "./SignupForm.module.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface FormValueType {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValueType>({ mode: "onBlur" });

  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, []);
  const passWordValue = getValues("password");

  const validatePasswordConfirm = (value: string): string | undefined => {
    if (value !== passWordValue) {
      return "비밀번호가 일치하지 않아요.";
    }

    return;
  };

  const checkDuplicateEmail = async (
    emailValue: string
  ): Promise<string | undefined> => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailValue,
          }),
        }
      );
      if (response.status === 409) {
        return "이미 사용 중인 이메일입니다.";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSignUp = async (data: FormValueType) => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-up",
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
      const json = await response.json();
      const accessToken = json.data.accessToken;
      if (response.ok) {
        localStorage.setItem("accessToken", accessToken);
        router.push("folder");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className={styles["sign_form"]}
        noValidate
        onSubmit={handleSubmit(onSignUp)}
      >
        <div className={styles["sign_input_box"]}>
          <label htmlFor='email'>이메일</label>
          <input
            className={`${errors.email && styles["invalid"]}`}
            placeholder='이메일을 입력해 주세요.'
            type='email'
            id='email'
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "올바른 이메일 주소가 아닙니다.",
              },
              validate: checkDuplicateEmail,
            })}
          />
          <p className={styles["input_error_message"]}>
            {errors.email?.message}
          </p>
        </div>
        <div className={styles["sign_input_box"]}>
          <label htmlFor='password'>비밀번호</label>
          <input
            className={`${errors.password && styles["invalid"]}`}
            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
            type='password'
            id='password'
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
                message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
              },
              minLength: {
                value: 8,
                message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
              },
            })}
          />
          <p className={styles["input_error_message"]}>
            {errors.password?.message}
          </p>
        </div>
        <div className={styles["sign_input_box"]}>
          <label htmlFor='passwordConfirm'>비밀번호 확인</label>
          <input
            className={`${errors.passwordConfirm && styles["invalid"]}`}
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
            type='password'
            id='passwordConfirm'
            {...register("passwordConfirm", {
              required: "비밀번호 확인값을 입력해주세요",
              validate: validatePasswordConfirm,
            })}
          />
          <p className={styles["input_error_message"]}>
            {errors.passwordConfirm?.message}
          </p>
        </div>
        <button className={styles["submit_button"]}>회원가입</button>
      </form>
      <div className={styles["footer_wrapper"]}>
        <div className={styles["social_sign_box"]}>
          <div className={styles["social_sign_text_box"]}>
            다른 방식으로 가입하기
          </div>
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

export default SignUpForm;
