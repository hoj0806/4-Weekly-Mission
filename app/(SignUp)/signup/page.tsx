import SignHeader from "@/components/common/SignHeader/SignHeader";
import SignUpForm from "@/components/signupPage/SignupForm";

import styles from "@/styles/Sign.module.css";
const SignUpPage = () => {
  return (
    <div className={styles["sign_wrapper"]}>
      <SignHeader />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
